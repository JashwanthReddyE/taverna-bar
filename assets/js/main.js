/* ============================================================
   TAVERNA — Interactions
   ============================================================ */
(function () {
  "use strict";

  /* ----------------------------------------------------------
     CONTACT FORM ENDPOINT
     Leave empty to use the built-in mailto fallback (opens the
     visitor's email app). To receive messages straight in your
     inbox without a server, paste a Formspree endpoint here, e.g.
       https://formspree.io/f/xxxxxxx
     ---------------------------------------------------------- */
  var FORM_ENDPOINT = "";
  var CONTACT_EMAIL = "info@tavernabar.ca";

  /* Opening hours, in week-minutes (Sun=0). Sessions wrap past
     midnight into the next day. Wed–Thu 18:00→02:00, Fri–Sun 18:00→03:00. */
  var DAY = 1440;
  var SESSIONS = [
    { start: 3 * DAY + 18 * 60, end: 4 * DAY + 2 * 60 },   // Wed 18:00 -> Thu 02:00
    { start: 4 * DAY + 18 * 60, end: 5 * DAY + 2 * 60 },   // Thu 18:00 -> Fri 02:00
    { start: 5 * DAY + 18 * 60, end: 6 * DAY + 3 * 60 },   // Fri 18:00 -> Sat 03:00
    { start: 6 * DAY + 18 * 60, end: 7 * DAY + 3 * 60 },   // Sat 18:00 -> Sun 03:00
    { start: 0 * DAY + 18 * 60, end: 1 * DAY + 3 * 60 }    // Sun 18:00 -> Mon 03:00
  ];
  var OPEN_DAYS = { 3: true, 4: true, 5: true, 6: true, 0: true }; // for schedule highlight

  var $  = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

  /* ---------- Language init ---------- */
  function initLanguage() {
    var saved;
    try { saved = localStorage.getItem("taverna-lang"); } catch (e) {}
    window.applyLanguage(saved === "en" ? "en" : "fr"); // default FR

    $$("[data-lang-btn]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        window.applyLanguage(btn.getAttribute("data-lang-btn"));
      });
    });
  }

  /* ---------- Header on scroll ---------- */
  function initHeader() {
    var header = $(".header");
    var onScroll = function () { header.classList.toggle("scrolled", window.scrollY > 24); };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---------- Mobile menu ---------- */
  function initMobileMenu() {
    var burger = $(".burger");
    var links = $(".nav-links");
    var scrim = $(".scrim");
    if (!burger) return;

    function close() {
      burger.classList.remove("open");
      links.classList.remove("open");
      scrim.classList.remove("show");
      burger.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    }
    function toggle() {
      var open = !links.classList.contains("open");
      burger.classList.toggle("open", open);
      links.classList.toggle("open", open);
      scrim.classList.toggle("show", open);
      burger.setAttribute("aria-expanded", String(open));
      document.body.style.overflow = open ? "hidden" : "";
    }
    burger.addEventListener("click", toggle);
    scrim.addEventListener("click", close);
    $$(".nav-links a").forEach(function (a) { a.addEventListener("click", close); });
    window.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });
  }

  /* ---------- Scroll reveal ----------
     Scroll/resize is the reliable baseline (fires everywhere);
     IntersectionObserver is layered on as the efficient path.
     Either way, content can never stay stuck hidden. */
  function initReveal() {
    // Mark the document as JS-enabled so the hidden state kicks in.
    document.documentElement.classList.add("js");

    var els = $$(".reveal");
    var reveal = function (el) { el.classList.add("in"); };
    var inView = function (el) {
      var r = el.getBoundingClientRect();
      return r.top < (window.innerHeight || 0) * 0.92 && r.bottom > 0;
    };

    var ticking = false;
    function update() {
      ticking = false;
      for (var i = els.length - 1; i >= 0; i--) {
        if (inView(els[i])) { reveal(els[i]); els.splice(i, 1); }
      }
    }
    function onScroll() { if (!ticking) { ticking = true; requestAnimationFrame(update); } }

    update(); // reveal above-the-fold immediately

    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { reveal(en.target); io.unobserve(en.target); }
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
      els.slice().forEach(function (el) { io.observe(el); });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    window.addEventListener("load", update);
  }

  /* ---------- Scrollspy (active nav link) ---------- */
  function initScrollSpy() {
    var sections = $$("section[id], header[id]");
    var map = {};
    $$(".nav-links a[href^='#']").forEach(function (a) { map[a.getAttribute("href").slice(1)] = a; });
    if (!("IntersectionObserver" in window)) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        var link = map[en.target.id];
        if (!link) return;
        if (en.isIntersecting) {
          $$(".nav-links a").forEach(function (x) { x.classList.remove("active"); });
          link.classList.add("active");
        }
      });
    }, { threshold: 0.5 });
    sections.forEach(function (s) { io.observe(s); });
  }

  /* ---------- Live open/closed status ---------- */
  function fmtTime(minOfDay, lang) {
    var h = Math.floor(minOfDay / 60) % 24;
    var m = minOfDay % 60;
    if (lang === "en") {
      var ap = h >= 12 ? "PM" : "AM";
      var hh = h % 12; if (hh === 0) hh = 12;
      return hh + (m ? ":" + String(m).padStart(2, "0") : "") + " " + ap;
    }
    return h + " h" + (m ? String(m).padStart(2, "0") : "");
  }

  function computeStatus(now) {
    var wm = now.getDay() * DAY + now.getHours() * 60 + now.getMinutes();
    for (var i = 0; i < SESSIONS.length; i++) {
      var s = SESSIONS[i];
      if ((wm >= s.start && wm < s.end) || (wm + 7 * DAY >= s.start && wm + 7 * DAY < s.end)) {
        return { open: true, edge: s.end % DAY };
      }
    }
    // Closed — find next opening
    var best = Infinity, openMin = null;
    for (var j = 0; j < SESSIONS.length; j++) {
      var st = SESSIONS[j].start;
      var diff = st - wm; if (diff < 0) diff += 7 * DAY;
      if (diff < best) { best = diff; openMin = SESSIONS[j].start % DAY; }
    }
    return { open: false, edge: openMin };
  }

  function renderStatus() {
    var lang = window.currentLang || "fr";
    var st = computeStatus(new Date());
    $$("[data-status]").forEach(function (pill) {
      var dot = $(".dot", pill);
      var label = $(".status-label", pill);
      pill.classList.toggle("open", st.open);
      pill.classList.toggle("closed", !st.open);
      if (st.open) {
        label.textContent = window.t("status.open", lang) + " · " +
          window.t("status.until", lang).replace("{time}", fmtTime(st.edge, lang));
      } else {
        label.textContent = window.t("status.closed", lang) + " · " +
          window.t("status.opensAt", lang).replace("{time}", fmtTime(st.edge, lang));
      }
    });
  }

  function highlightToday() {
    var d = new Date().getDay();
    // schedule rows
    $$("[data-day]").forEach(function (row) {
      var days = row.getAttribute("data-day").split(",").map(Number);
      row.classList.toggle("today", days.indexOf(d) !== -1);
    });
  }

  /* ---------- Marquee (duplicate for seamless loop) ---------- */
  function initMarquee() {
    var track = $(".marquee-track");
    if (!track) return;
    track.innerHTML += track.innerHTML; // duplicate once
  }

  /* ---------- Contact form ---------- */
  function initForm() {
    var form = $("#contact-form");
    if (!form) return;
    var statusBox = $(".form-status", form);
    var submitBtn = $("button[type=submit]", form);
    var submitLabel = $(".btn-label", submitBtn);

    function setFieldError(field, msgKey) {
      var wrap = field.closest(".field");
      var err = $(".err", wrap);
      if (msgKey) {
        wrap.classList.add("invalid");
        if (err) err.textContent = window.t(msgKey);
      } else {
        wrap.classList.remove("invalid");
      }
    }

    function validate() {
      var ok = true;
      var name = form.elements["name"];
      var email = form.elements["email"];
      var message = form.elements["message"];

      if (!name.value.trim()) { setFieldError(name, "contact.err.required"); ok = false; } else setFieldError(name);
      if (!email.value.trim()) { setFieldError(email, "contact.err.required"); ok = false; }
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) { setFieldError(email, "contact.err.email"); ok = false; }
      else setFieldError(email);
      if (!message.value.trim()) { setFieldError(message, "contact.err.required"); ok = false; } else setFieldError(message);

      return ok;
    }

    // Live-clear errors as the user types
    $$("input, textarea, select", form).forEach(function (el) {
      el.addEventListener("input", function () {
        var wrap = el.closest(".field");
        if (wrap && wrap.classList.contains("invalid")) wrap.classList.remove("invalid");
        statusBox.classList.remove("show", "ok", "bad");
      });
    });

    function showStatus(kind, msgKey) {
      statusBox.className = "form-status show " + kind;
      statusBox.textContent = window.t(msgKey);
    }

    function setLoading(on) {
      submitBtn.disabled = on;
      submitLabel.textContent = window.t(on ? "contact.sending" : "contact.send");
    }

    function mailtoFallback(data) {
      var subjectLabel = window.t("contact.subj." + data.subjectKey) || data.subjectKey;
      var subject = "[Taverna] " + subjectLabel + " — " + data.name;
      var bodyLines = [
        data.name,
        data.email + (data.phone ? " · " + data.phone : ""),
        "",
        data.message
      ];
      var href = "mailto:" + CONTACT_EMAIL +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(bodyLines.join("\n"));
      window.location.href = href;
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      statusBox.classList.remove("show", "ok", "bad");
      if (!validate()) return;

      var data = {
        name: form.elements["name"].value.trim(),
        email: form.elements["email"].value.trim(),
        phone: form.elements["phone"].value.trim(),
        subjectKey: form.elements["subject"].value,
        message: form.elements["message"].value.trim()
      };

      if (!FORM_ENDPOINT) {
        // No server configured: open the visitor's email client, prefilled.
        mailtoFallback(data);
        showStatus("ok", "contact.ok");
        form.reset();
        return;
      }

      setLoading(true);
      fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          name: data.name, email: data.email, phone: data.phone,
          subject: window.t("contact.subj." + data.subjectKey, "fr"),
          message: data.message
        })
      }).then(function (r) {
        if (r.ok) { showStatus("ok", "contact.ok"); form.reset(); }
        else { showStatus("bad", "contact.bad"); }
      }).catch(function () {
        showStatus("bad", "contact.bad");
      }).finally(function () { setLoading(false); });
    });
  }

  /* ---------- Hero video (pause when off-screen) ---------- */
  function initHeroVideo() {
    var v = $(".hero-video");
    var hero = $("#accueil");
    if (!v) return;
    var tryPlay = function () { var p = v.play(); if (p && p.catch) p.catch(function () {}); };
    tryPlay(); // explicit nudge in addition to the autoplay attribute
    if (!hero || !("IntersectionObserver" in window)) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { var p = v.play(); if (p && p.catch) p.catch(function () {}); }
        else { v.pause(); }
      });
    }, { threshold: 0.1 });
    io.observe(hero);
  }

  /* ---------- Gallery lightbox ---------- */
  function initLightbox() {
    var lb = $("#lightbox");
    if (!lb) return;
    var tiles = $$(".gtile");
    if (!tiles.length) return;
    var imgEl = $("img", lb);
    var capEl = $(".lb-cap", lb);
    var idx = 0;

    function show(i) {
      idx = (i + tiles.length) % tiles.length;
      var tile = tiles[idx];
      imgEl.src = tile.getAttribute("data-full");
      var cap = $(".cap", tile);
      imgEl.alt = cap ? cap.textContent : "";
      capEl.textContent = cap ? cap.textContent : "";
    }
    function open(i) {
      show(i);
      lb.classList.add("show");
      lb.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    }
    function close() {
      lb.classList.remove("show");
      lb.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    }

    tiles.forEach(function (tile, i) {
      tile.addEventListener("click", function () { open(i); });
    });
    $(".lb-close", lb).addEventListener("click", close);
    $(".lb-next", lb).addEventListener("click", function (e) { e.stopPropagation(); show(idx + 1); });
    $(".lb-prev", lb).addEventListener("click", function (e) { e.stopPropagation(); show(idx - 1); });
    lb.addEventListener("click", function (e) { if (e.target === lb) close(); });
    window.addEventListener("keydown", function (e) {
      if (!lb.classList.contains("show")) return;
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") show(idx + 1);
      else if (e.key === "ArrowLeft") show(idx - 1);
    });
  }

  /* ---------- Year ---------- */
  function initYear() {
    var y = new Date().getFullYear();
    $$("[data-year]").forEach(function (el) { el.textContent = y; });
  }

  /* ---------- Boot ---------- */
  document.addEventListener("DOMContentLoaded", function () {
    initLanguage();
    initHeader();
    initMobileMenu();
    initMarquee();
    initReveal();
    initScrollSpy();
    initForm();
    initHeroVideo();
    initLightbox();
    initYear();
    renderStatus();
    highlightToday();

    // Re-render language-dependent dynamic bits when language changes
    document.addEventListener("languagechange", function () {
      renderStatus();
      highlightToday();
    });

    // Refresh live status every minute
    setInterval(function () { renderStatus(); highlightToday(); }, 60 * 1000);
  });
})();
