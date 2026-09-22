/* Progressive enhancements: citations remain readable without JavaScript. */
(() => {
  document.querySelectorAll('.copy-citation').forEach((button) => {
    button.hidden = false;
    button.addEventListener('click', async () => {
      const panel = button.closest('.bibtex-panel');
      const status = panel.querySelector('.copy-status');
      button.disabled = true;
      status.textContent = '';
      try {
        await navigator.clipboard.writeText(panel.querySelector('code').textContent);
        status.textContent = 'Copied!';
      } catch (_) {
        status.textContent = 'Select the citation above and copy it manually.';
        panel.querySelector('pre').focus();
      } finally {
        button.disabled = false;
      }
    });
  });
  const topLink = document.querySelector('.back-to-top');
  if (topLink) {
    const update = () => { topLink.hidden = window.scrollY <= window.innerHeight; };
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();
    topLink.addEventListener('click', () => {
      document.querySelector('.site-name').focus({ preventScroll: true });
    });
  }
})();
