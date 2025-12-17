/* HBV Visitor Counter */
(async () => {
  const el = document.getElementById("hbvCounter");
  const ns = "invokehoneybadger.github.io";
  const key = "visits";
  const url = `https://api.countapi.xyz/hit/${encodeURIComponent(ns)}/${encodeURIComponent(key)}`;

  // Timeout so we don't hang if blocked
  const controller = new AbortController();
  const t = setTimeout(() => controller.abort(), 2500);

  try {
    const res = await fetch(url, { cache: "no-store", signal: controller.signal });
    if (!res.ok) throw new Error("HTTP " + res.status);
    const data = await res.json();
    if (typeof data.value === "number") {
      el.textContent = `HBV> Visitors logged: ${data.value}`;
      return;
    }
    throw new Error("Bad payload");
  } catch {
    // Clean terminal-style fallback (no external image)
    el.textContent = "HBV> Visitors logged: [unavailable]";
  } finally {
    clearTimeout(t);
  }
})();
