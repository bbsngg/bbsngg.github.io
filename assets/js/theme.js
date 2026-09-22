/* Run before styles are loaded so saved preferences apply on the first paint. */
(() => {
  const key = 'homepage-theme';
  const modes = ['system', 'light', 'dark'];
  const labels = { system: 'System', light: 'Light', dark: 'Dark' };
  const system = window.matchMedia('(prefers-color-scheme: dark)');
  const root = document.documentElement;
  let mode = 'system';
  let button;
  const readPreference = () => {
    try {
      const saved = localStorage.getItem(key);
      return modes.includes(saved) ? saved : 'system';
    } catch (_) { return 'system'; }
  };
  const apply = () => {
    const theme = mode === 'system' ? (system.matches ? 'dark' : 'light') : mode;
    root.dataset.theme = theme;
    root.dataset.themeMode = mode;
    document.querySelectorAll('meta[name="theme-color"]').forEach((meta) => {
      meta.content = theme === 'dark' ? '#0c1727' : '#f6f8fc';
    });
    if (button) {
      const next = modes[(modes.indexOf(mode) + 1) % modes.length];
      const label = `Theme: ${labels[mode]}. Switch to ${labels[next].toLowerCase()} mode`;
      button.setAttribute('aria-label', label);
      button.title = label;
      button.querySelector('.theme-label').textContent = labels[mode];
    }
  };
  mode = readPreference();
  apply();
  system.addEventListener('change', apply);
  window.addEventListener('storage', (event) => {
    if (event.key === key || event.key === null) {
      mode = readPreference();
      apply();
    }
  });
  document.addEventListener('DOMContentLoaded', () => {
    button = document.querySelector('.theme-toggle');
    if (!button) return;
    button.addEventListener('click', () => {
      mode = modes[(modes.indexOf(mode) + 1) % modes.length];
      try { localStorage.setItem(key, mode); } catch (_) { /* Still works for this page. */ }
      apply();
    });
    apply();
    button.hidden = false;
  });
})();
