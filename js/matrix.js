/* MATRIX CANVAS ANIMATION */
(() => {
  const canvas = document.getElementById('matrix-canvas');
  const ctx = canvas.getContext('2d');
  let W = canvas.width = innerWidth;
  let H = canvas.height = innerHeight;
  let cols = Math.floor(W / 16);
  let ypos = new Array(cols).fill(0);
  function resize() {
    W = canvas.width = innerWidth;
    H = canvas.height = innerHeight;
    const newCols = Math.max(2, Math.floor(W / 16));
    const old = ypos.slice();
    ypos = new Array(newCols);
    for (let i = 0; i < newCols; i++) {
      if (typeof old[i] !== 'undefined') ypos[i] = old[i];
      else ypos[i] = Math.random() * (H / 16);
    }
    cols = newCols;
  }
  addEventListener('resize', resize);
  function matrixFrame() {
    ctx.fillStyle = 'rgba(2,6,2,0.18)';
    ctx.fillRect(0, 0, W, H);
    ctx.font = '12px "Roboto Mono", "Courier New", monospace';
    for (let i = 0; i < ypos.length; i++) {
      const text = String.fromCharCode(0x30A0 + Math.floor(Math.random() * 96));
      const x = i * 16;
      const y = ypos[i] * 16;
      ctx.fillStyle = 'rgba(180,255,190,0.95)';
      ctx.fillText(text, x, y);
      for (let t = 1; t < 5; t++) {
        ctx.fillStyle = `rgba(90,180,110,${0.12 * (5 - t)})`;
        ctx.fillText(text, x, y - t * 16);
      }
      if ((y > H && Math.random() > 0.975) || (Math.random() > 0.9999)) {
        ypos[i] = 0;
      } else {
        ypos[i] = ypos[i] + 0.85;
      }
    }
    requestAnimationFrame(matrixFrame);
  }
  matrixFrame();
})();
