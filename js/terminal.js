/* TERMINAL STREAM (left panel) */
(() => {
  const el = document.getElementById('term-stream');
  const MAX_LINES = 10;
  const lines = [
    'init hbv session: ok',
    'loading modules: recon, beacon, lateral',
    'payloads: staging... done',
    'connectors: ssh, winrm, smb',
    'recon> scan subnet 10.0.0.0/24',
    'recon> discovered: host-72 (svc: smb, rdp)',
    'dispatch> beacon schedule: randomized jitter',
    'opsec> user-agent rotate: enabled',
    'store> vault encrypted: sha256-ok',
    'note: keep operations compartmentalized'
  ];
  let idx = 0;
  function pushLine() {
    const now = new Date().toISOString().replace('T',' ').replace('Z','');
    const line = `[${now}] ${lines[idx++ % lines.length]}`;
    el.textContent = (el.textContent + '\n' + line).split('\n').slice(-16).join('\n');
    el.style.opacity = 0.92;
    setTimeout(()=> el.style.opacity = 1, 80);
  }
  setInterval(pushLine, 1200);
  for (let i=0;i<6;i++) setTimeout(pushLine, i*120);
})();

/* Fill year in footer */
document.getElementById('year').textContent = new Date().getFullYear();
