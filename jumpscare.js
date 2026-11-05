// Roughriders jumpscare audio + runner
window.RoughridersJumpscare = function (layerId) {
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
      // creepy low drone "song"
      tone('sine', 55, 40, 0, 2.8, 0.35);
      tone('sine', 82.5, 60, 0.15, 2.6, 0.22);
      tone('triangle', 110, 90, 0.3, 2.4, 0.18);
      tone('sawtooth', 146, 100, 0.2, 1.8, 0.12);
      tone('sawtooth', 175, 120, 0.35, 1.6, 0.1);
      // SCREAMS
      tone('sawtooth', 900, 180, 0.05, 0.7, 0.45);
      tone('square', 1200, 90, 0.08, 0.55, 0.28);
      tone('sawtooth', 700, 60, 0.12, 0.9, 0.35);
      tone('sawtooth', 1100, 150, 0.55, 0.65, 0.4);
      tone('square', 500, 70, 0.6, 0.5, 0.25);
      tone('sawtooth', 800, 40, 1.0, 1.2, 0.32);
      tone('sine', 220, 55, 1.1, 1.5, 0.2);
    } catch (e) {}
  }

  function run() {
    layer.classList.add('active', 'flash', 'rush');
    scream();
    setTimeout(function () {
      layer.classList.remove('rush', 'flash');
      layer.classList.add('hold');
    }, 300);
    setTimeout(function () {
      layer.classList.remove('hold');
      layer.classList.add('walk');
    }, 1100);
    setTimeout(function () {
      layer.classList.remove('active', 'walk');
    }, 3600);
  }

  // browsers often block audio until a click — still run visual; unlock audio on first interaction
  function unlock() {
    try {
      var c = new (window.AudioContext || window.webkitAudioContext)();
      c.resume();
    } catch (e) {}
    document.removeEventListener('click', unlock);
    document.removeEventListener('touchstart', unlock);
  }
  document.addEventListener('click', unlock);
  document.addEventListener('touchstart', unlock);

  setTimeout(run, 250);
};
