// Alberta Roughriders — load logo and strip white background
(function () {
  var SRC = "https://raw.githubusercontent.com/EEEEEEEEERqr/alberta-roughriders/main/256.avif";
  var transparentUrl = null;

  function stripWhite(img, cb) {
    try {
      var c = document.createElement("canvas");
      c.width = img.naturalWidth || img.width;
      c.height = img.naturalHeight || img.height;
      var ctx = c.getContext("2d");
      ctx.drawImage(img, 0, 0);
      var data = ctx.getImageData(0, 0, c.width, c.height);
      var d = data.data;
      for (var i = 0; i < d.length; i += 4) {
        var r = d[i], g = d[i + 1], b = d[i + 2];
        // pure / near-white → transparent
        if (r > 235 && g > 235 && b > 235) {
          d[i + 3] = 0;
        } else if (r > 210 && g > 210 && b > 210) {
          var avg = (r + g + b) / 3;
          d[i + 3] = Math.max(0, Math.min(255, Math.round((255 - avg) * 5)));
        }
      }
      ctx.putImageData(data, 0, 0);
      transparentUrl = c.toDataURL("image/png");
      cb(transparentUrl);
    } catch (e) {
      cb(SRC); // fallback (CORS may block canvas on some hosts)
    }
  }

  function applyUrl(url) {
    document.querySelectorAll("img.team-logo, img[alt*='Roughriders']").forEach(function (img) {
      if (img.closest(".hero-photo") || img.closest(".marvin-card") || img.closest(".staff-icon") || img.classList.contains("face")) return;
      img.crossOrigin = "anonymous";
      img.src = url;
      img.alt = "Alberta Roughriders";
      img.style.background = "transparent";
      img.style.backgroundColor = "transparent";
    });
  }

  function run() {
    if (transparentUrl) {
      applyUrl(transparentUrl);
      return;
    }
    var loader = new Image();
    loader.crossOrigin = "anonymous";
    loader.onload = function () {
      stripWhite(loader, function (url) {
        applyUrl(url);
      });
    };
    loader.onerror = function () {
      applyUrl(SRC);
    };
    loader.src = SRC;
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", run);
  else run();
  setTimeout(run, 100);
  setTimeout(run, 500);
})();
