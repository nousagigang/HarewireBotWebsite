function showHeader() {
  const headerHtml = `

<header class="topbar">
  <a class="brand" href="index.html"><span class="brand__rabbit">🐇</span><span>HAREWIREBOT</span></a>
  <button id="menu-button" class="menu-button" type="button" aria-expanded="false" aria-controls="site-nav">MENU</button>
  <nav id="site-nav" class="nav" aria-label="Main navigation">
    <a href="index.html">HOME</a>
    <a href="development.html">DEVELOPMENT</a>
    <a href="roadmap.html">ROADMAP</a>
    <a href="commands.html">COMMANDS</a>
    <a href="changelog.html">CHANGELOG</a>
    <a class="active" href="status.html">STATUS</a>
  </nav>
</header>

`;
  document.body.innerHTML += headerHtml;
}