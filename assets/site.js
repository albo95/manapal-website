/* ManaPal: clips play while they're on screen, and sections fade in as you reach them.
   With "reduce motion" nothing moves: clips show their poster and play only when tapped. */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var videos = Array.prototype.slice.call(document.querySelectorAll("video[data-autoplay]"));
  var reveals = Array.prototype.slice.call(document.querySelectorAll(".reveal"));

  function load(video) {
    if (!video.getAttribute("src") && video.dataset.src) {
      video.setAttribute("src", video.dataset.src);
      video.load();
    }
  }

  function play(video) {
    load(video);
    var attempt = video.play();
    if (attempt && attempt.catch) attempt.catch(function () {});
  }

  videos.forEach(function (video) {
    video.muted = true;
    video.playsInline = true;
    video.addEventListener("click", function () {
      if (video.paused) play(video); else video.pause();
    });
  });

  if (!("IntersectionObserver" in window)) {
    reveals.forEach(function (el) { el.classList.add("is-in"); });
    if (!reduceMotion) videos.forEach(play);
    return;
  }

  /* Start fetching a clip a little before it scrolls in, play it once it's mostly visible. */
  var preload = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) { load(entry.target); preload.unobserve(entry.target); }
    });
  }, { rootMargin: "400px 0px" });

  var playback = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      var video = entry.target;
      if (entry.isIntersecting && !reduceMotion) {
        video.currentTime = 0;
        play(video);
      } else if (!video.paused) {
        video.pause();
      }
    });
  }, { threshold: 0.55 });

  videos.forEach(function (video) { preload.observe(video); playback.observe(video); });

  if (reduceMotion) {
    reveals.forEach(function (el) { el.classList.add("is-in"); });
    return;
  }
  document.documentElement.classList.add("has-reveal");
  var reveal = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) { entry.target.classList.add("is-in"); reveal.unobserve(entry.target); }
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -8% 0px" });
  reveals.forEach(function (el) { reveal.observe(el); });
})();
