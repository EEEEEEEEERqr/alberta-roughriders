// Alberta Roughriders real logo (cowboy on horse)
(function() {
  const LOGO = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAA...";
  function apply() {
    document.querySelectorAll("img.team-logo, .logo img, .logo-wrap img, img[alt*=\"Roughriders\"]").forEach(img => {
      img.src = LOGO;
      img.style.filter = "drop-shadow(0 0 10px rgba(255,77,158,0.4))";
    });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", apply);
  else apply();
})();
