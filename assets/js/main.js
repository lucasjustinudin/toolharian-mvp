function copyValue(id) {
  const el = document.getElementById(id);
  if (!el) return;
  navigator.clipboard.writeText(el.value || el.textContent || '');
}

function titleCase(text) {
  return text.toLowerCase().replace(/\b\w/g, m => m.toUpperCase());
}

function safeNumber(value, fallback = 0) {
  const n = Number(value);
  return Number.isFinite(n) ? n : fallback;
}

function pageShell(title, intro, inner, related) {
  return `
  <header>
    <div class="container nav">
      <a class="brand" href="../index.html">ToolHarian</a>
      <nav class="nav-links">
        <a href="../index.html">Home</a>
        <a href="../about.html">About</a>
        <a href="../contact.html">Contact</a>
        <a href="../privacy-policy.html">Privacy</a>
        <a href="../terms.html">Terms</a>
      </nav>
    </div>
  </header>
  <main class="container">
    <section>
      <div class="card">
        <h1>${title}</h1>
        <p class="small">${intro}</p>
        ${inner}
      </div>
    </section>
    <section>
      <div class="card">
        <h2>Tool terkait</h2>
        <div class="grid">${related}</div>
      </div>
    </section>
  </main>
  <footer>
    <div class="container">
      <p>© 2026 ToolHarian. Tools online gratis buat kebutuhan harian.</p>
    </div>
  </footer>`;
}
