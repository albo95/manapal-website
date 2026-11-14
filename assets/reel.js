/* ManaPal: video reel. One phone in the middle plays its clip; its neighbours wait, paused, on
   either side. When a clip ends the next one moves to the middle; swipe, the arrows or a tap on a
   neighbour change slide. Slides without a video show their poster for a few seconds.
   With "reduce motion" nothing plays by itself: tap the middle phone to play. */
(function () {
  "use strict";

  var reel = document.querySelector("[data-reel]");
  if (!reel) return;

  var track = reel.querySelector(".reel-track");
  var slides = Array.prototype.slice.call(reel.querySelectorAll(".reel-slide"));
  var caption = reel.querySelector(".reel-caption");
  var dots = Array.prototype.slice.call(reel.querySelectorAll(".reel-dots button"));
  var progress = reel.querySelector(".reel-progress span");
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  var count = slides.length;
  var active = 0;
  var visible = false;
  var stillTimer = null;
  var stillStart = 0;
  var STILL_MS = 4500;

  if (count === 0) return;
  reel.classList.add("is-ready");

  function video(slide) { return slide.querySelector("video"); }

  /* Signed distance from the active slide, wrapping around (−3…3 for seven slides). */
  function offset(index) {
    var d = (index - active + count) % count;
    if (d > count / 2) d -= count;
    return d;
  }

  /* Loads a clip only when it's in the middle or next to it. */
  function prepare(slide) {
    var v = video(slide);
    if (v && !v.getAttribute("src") && v.dataset.src) {
      v.setAttribute("src", v.dataset.src);
      v.load();
    }
  }

  function stopAll() {
    clearTimeout(stillTimer);
    stillTimer = null;
    slides.forEach(function (slide) {
      var v = video(slide);
      if (v && !v.paused) v.pause();
    });
  }

  function setProgress(fraction) {
    if (progress) progress.style.transform = "scaleX(" + Math.max(0, Math.min(1, fraction)) + ")";
  }

  function tickStill() {
    if (!stillTimer) return;
    setProgress((Date.now() - stillStart) / STILL_MS);
    requestAnimationFrame(tickStill);
  }

  function play() {
    stopAll();
    setProgress(0);
    if (!visible) return;
    var slide = slides[active];
    var v = video(slide);
    if (reduceMotion.matches) return;
    if (v && v.dataset.src) {
      prepare(slide);
      v.currentTime = 0;
      var attempt = v.play();
      if (attempt && attempt.catch) attempt.catch(function () {});
    } else {
      stillStart = Date.now();
      stillTimer = setTimeout(function () { go(active + 1); }, STILL_MS);
      requestAnimationFrame(tickStill);
    }
  }

  function layout() {
    slides.forEach(function (slide, index) {
      var d = offset(index);
      slide.dataset.pos = String(Math.max(-3, Math.min(3, d)));
      slide.setAttribute("aria-hidden", d === 0 ? "false" : "true");
      slide.tabIndex = Math.abs(d) === 1 ? 0 : -1;
      if (Math.abs(d) <= 1) prepare(slide);
      var v = video(slide);
      /* Neighbours rest on their first frame. */
      if (v && d !== 0 && v.readyState > 0) { try { v.currentTime = 0; } catch (e) {} }
    });
    if (caption) caption.textContent = slides[active].dataset.caption || "";
    dots.forEach(function (dot, index) {
      dot.setAttribute("aria-current", index === active ? "true" : "false");
    });
  }

  function go(index) {
    active = (index % count + count) % count;
    layout();
    play();
  }

  slides.forEach(function (slide, index) {
    var v = video(slide);
    if (v) {
      v.muted = true;
      v.playsInline = true;
      v.addEventListener("timeupdate", function () {
        if (index === active && v.duration) setProgress(v.currentTime / v.duration);
      });
      v.addEventListener("ended", function () { if (index === active) go(active + 1); });
    }
    slide.addEventListener("click", function () {
      if (dragged) return;
      if (index !== active) { go(index); return; }
      /* Middle phone: play or pause (the only way to play with reduce motion on). */
      if (v && v.dataset.src) {
        prepare(slide);
        if (v.paused) { var p = v.play(); if (p && p.catch) p.catch(function () {}); } else { v.pause(); }
      }
    });
    slide.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.key === " ") { event.preventDefault(); go(index); }
    });
  });

  dots.forEach(function (dot, index) { dot.addEventListener("click", function () { go(index); }); });
  var prev = reel.querySelector("[data-reel-prev]");
  var next = reel.querySelector("[data-reel-next]");
  if (prev) prev.addEventListener("click", function () { go(active - 1); });
  if (next) next.addEventListener("click", function () { go(active + 1); });
  reel.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") go(active - 1);
    if (event.key === "ArrowRight") go(active + 1);
  });

  /* Swipe. */
  var startX = null;
  var dragged = false;
  track.addEventListener("pointerdown", function (event) { startX = event.clientX; dragged = false; });
  track.addEventListener("pointermove", function (event) {
    if (startX !== null && Math.abs(event.clientX - startX) > 12) dragged = true;
  });
  track.addEventListener("pointerup", function (event) {
    if (startX === null) return;
    var dx = event.clientX - startX;
    startX = null;
    if (Math.abs(dx) > 40) go(active + (dx < 0 ? 1 : -1));
    setTimeout(function () { dragged = false; }, 0);
  });
  track.addEventListener("pointercancel", function () { startX = null; dragged = false; });

  /* Play only while the reel is on screen. */
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(function (entries) {
      var nowVisible = entries[0].isIntersecting;
      if (nowVisible === visible) return;
      visible = nowVisible;
      if (visible) play(); else stopAll();
    }, { threshold: 0.35 }).observe(reel);
  } else {
    visible = true;
  }
  document.addEventListener("visibilitychange", function () {
    if (document.hidden) stopAll(); else if (visible) play();
  });

  layout();
  play();
})();
