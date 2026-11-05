// Alberta Roughriders — real logo (absolute URL so it works on raw.githack, GitHub Pages, etc.)
(function () {
  var LOGO = "https://raw.githubusercontent.com/EEEEEEEEERqr/alberta-roughriders/main/256.avif";
  function apply() {
    document.querySelectorAll("img.team-logo, img[alt*='Roughriders']").forEach(function (img) {
      if (img.closest(".hero-photo") || img.closest(".marvin-card") || img.closest(".staff-icon")) return;
      img.src = LOGO;
      img.alt = "Alberta Roughriders";
      img.onerror = function () {
        // fallback if avif fails
        this.onerror = null;
        this.src = "https://raw.githubusercontent.com/EEEEEEEEERqr/alberta-roughriders/main/logo.svg";
      };
    });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", apply);
  else apply();
})();
