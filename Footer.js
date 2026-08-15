function showFooter() {
  const footerHtml = `

<footer class="footer">
  <div class="container footer__inner">
    <div><strong>🐇 HAREWIREBOT</strong><p>A Discord bot in the making.</p></div>
    <nav aria-label="Footer navigation">
      <a href="status.html">Status</a>
      <a href="contact.html">Contact</a>
      <a href="security.html">Security</a>
      <a href="privacy-policy.html">Privacy</a>
      <a href="terms-of-service.html">ToS</a>
    </nav>
    <p class="copyright">© 2026 HarewireBot. Built one phase at a time.</p>
  </div>
</footer>

`;
  document.body.innerHTML += footerHtml;
}