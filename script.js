let currentPad = null;
let currentNote = "";

function togglePad(note) {
  if (currentNote === note && currentPad) {
    stopPad();
    return;
  }

  stopPad(); // Para o anterior

  currentPad = new Audio(`pads/pad_${note}.mp3`);
  currentPad.loop = true;
  currentPad.play();
  currentNote = note;
}

function stopPad() {
  if (currentPad) {
    currentPad.pause();
    currentPad.currentTime = 0;
    currentPad = null;
    currentNote = "";
  }
}
