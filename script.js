
let pads = {};
function togglePad(i) {
  const btn = document.getElementById('btn' + i);
  if (pads[i]) {
    pads[i].pause();
    btn.textContent = 'OFF';
    pads[i] = null;
  } else {
    pads[i] = new Audio('pads/pad' + i + '.mp3');
    pads[i].loop = true;
    pads[i].play();
    btn.textContent = 'ON';
  }
}
