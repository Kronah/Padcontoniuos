let pads = {};

function togglePad(id, button) {
  if (pads[id]) {
    pads[id].pause();
    pads[id].currentTime = 0;
    delete pads[id];
    button.innerText = "OFF";
    button.style.backgroundColor = "red";
  } else {
    const audio = new Audio("pads/" + id + ".mp3");
    audio.loop = true;
    audio.play();
    pads[id] = audio;
    button.innerText = "ON";
    button.style.backgroundColor = "green";
  }
}

function adjustVolume(elem, event) {
  const rect = elem.getBoundingClientRect();
  const height = rect.height;
  const offset = event.clientY - rect.top;
  const nivel = elem.querySelector(".nivel");
  const percent = Math.max(0, Math.min(1, (height - offset) / height));
  nivel.style.height = (percent * 100) + "%";
  // Ajustar volume real se necessário
}
