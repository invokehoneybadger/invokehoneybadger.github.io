/* HBV Status Display (Privacy-Friendly) */
(() => {
  const el = document.getElementById("hbvCounter");
  if (!el) return;

  // Simple status display without external tracking
  // Respects user privacy - no third-party API calls
  const messages = [
    "HBV> Systems online",
    "HBV> Secure connection established",
    "HBV> Operations active",
    "HBV> Terminal ready"
  ];

  // Display a random status message
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  el.textContent = randomMessage;

  // Optional: Add subtle animation
  el.style.opacity = "0";
  setTimeout(() => {
    el.style.transition = "opacity 0.8s ease-in";
    el.style.opacity = "1";
  }, 500);
})();
