// Alberta Roughriders — real logo
(function () {
  var LOGO = "256.avif";
  function apply() {
    document.querySelectorAll("img.team-logo, img[alt*='Roughriders']").forEach(function (img) {
      // don't overwrite player photos or marvin
      if (img.closest('.hero-photo') || img.closest('.marvin-card') || img.closest('.staff-icon')) return;
      img.src = LOGO;
      img.alt = "Alberta Roughriders";
    });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", apply);
  else apply();
})();
