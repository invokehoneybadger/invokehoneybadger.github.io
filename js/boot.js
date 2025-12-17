/* HBV Boot Sequence Sound + Visual Sync */
window.addEventListener("load", () => {
  const bar = document.getElementById("hbvBootBar");

  // intro text (pre-banner sequence)
  const intro = document.createElement("div");
  intro.textContent = "HBV> Initializing systems...";
  intro.style.cssText = `
    background-color:#030304;
    color:#83a17a;
    font-family:'Courier New',monospace;
    text-align:center;
    padding:8px;
    border:1px solid #0f0;
    border-radius:6px;
    width:260px;
    margin:0 auto 10px;
    opacity:0;
    transition:opacity 1.2s ease;
  `;
  bar.parentNode.insertBefore(intro, bar);

  // fade in intro, play chirp, then fade to boot banner
  setTimeout(()=>{
    intro.style.opacity = 1;
    playHBVChirp();
  }, 300);

  setTimeout(()=>{
    intro.style.opacity = 0;
    setTimeout(()=> intro.remove(), 1000);
  }, 2300);

  // then animate the main boot bar
  setTimeout(() => {
    bar.style.opacity = "1";
    bar.style.transform = "translateY(0)";
    playHBVChirp();
  }, 2700);

  // blinking cursor effect
  setInterval(() => {
    bar.textContent =
      bar.textContent.endsWith("_")
        ? "HBV> Terminal Online "
        : "HBV> Terminal Online _";
  }, 600);
});

// inline-generated chirp tone (short, subtle)
function playHBVChirp() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "square";
    osc.frequency.value = 880; // A5, quick blip tone
    gain.gain.setValueAtTime(0.05, ctx.currentTime);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.08); // 80ms chirp
  } catch(e) {
    // Audio context initialization failed (expected in some browsers/contexts)
    // Silently fail to avoid information disclosure
  }
}
