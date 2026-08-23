function showFooter() {
  const footerHtml = `
<footer class="footer">
  <div class="container footer__inner">
    <div>
      <strong>🐇 HAREWIREBOT</strong>
      <p>A Discord bot in the making.</p>
    </div>
    <nav aria-label="Footer navigation">
      <a href="status.html">Status</a>
      <a href="about.html">About</a>
      <a href="contact.html">Contact</a>
      <a href="security.html">Security</a>
      <a href="privacy-policy.html">Privacy Policy</a>
      <a href="terms-of-service.html">Terms of Service</a>
    </nav>
    <p class="copyright">
      <small>
        © 2026 <a href="https://nousagigang.web.app" target="_blank">Nousagi Gang</a>. All rights reserved.
        <a href="/">HarewireBot</a> is an independent project by <a href="https://kalmed.localplayer.dev" target="_blank">K4LM3D</a>.
        Website source code licensed under MIT License.
        Not affiliated with Discord Inc.
      </small>
    </p>
  </div>
</footer>
  `;
  document.body.innerHTML += footerHtml;
}