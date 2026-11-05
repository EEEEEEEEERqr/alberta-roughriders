// Roughriders jumpscare — 1-in-5 chance
window.RoughridersJumpscare = function (layerId) {
  if (Math.random() >= 0.2) return; // 80% skip
  var layer = document.getElementById(layerId || 'jumpscare');
  if (!layer) return;

  function scream() {
    try {
      var ctx = new (window.AudioContext || window.webkitAudioContext)();
      var t = ctx.currentTime;
      function tone(type, freq, fEnd, start, dur, vol) {
        var o = ctx.createOscillator();
        var g = ctx.createGain();
        o.type = type;
        o.frequency.setValueAtTime(freq, t + start);
        if (fEnd) o.frequency.exponentialRampToValueAtTime(Math.max(20, fEnd), t + start + dur);
        g.gain.setValueAtTime(0.0001, t + start);
        g.gain.exponentialRampToValueAtTime(vol, t + start + 0.04);
        g.gain.exponentialRampToValueAtTime(0.0001, t + start + dur);
        o.connect(g);
        g.connect(ctx.destination);
        o.start(t + start);
        o.stop(t + start + dur + 0.02);
      }
      tone('sine', 55, 40, 0, 2.8, 0.35);
      tone('sine', 82.5, 60, 0.15, 2.6, 0.22);
      tone('triangle', 110, 90, 0.3, 2.4, 0.18);
      tone('sawtooth', 900, 180, 0.05, 0.7, 0.45);
      tone('square', 1200, 90, 0.08, 0.55, 0.28);
      tone('sawtooth', 700, 60, 0.12, 0.9, 0.35);
      tone('sawtooth', 1100, 150, 0.55, 0.65, 0.4);
      tone('sawtooth', 800, 40, 1.0, 1.2, 0.32);
    } catch (e) {}
  }

  function run() {
    layer.classList.add('on', 'rush', 'active');
    scream();
    setTimeout(function () { layer.classList.remove('rush'); layer.classList.add('hold'); }, 320);
    setTimeout(function () { layer.classList.remove('hold'); layer.classList.add('walk'); }, 1100);
    setTimeout(function () { layer.classList.remove('on', 'active', 'walk'); }, 3400);
  }

  setTimeout(run, 300);
  document.addEventListener('click', function once() {
    try { var c = new (window.AudioContext || window.webkitAudioContext)(); c.resume(); } catch (e) {}
    document.removeEventListener('click', once);
  });
};
