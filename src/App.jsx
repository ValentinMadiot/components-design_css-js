import AnimatedSearchBar from "./components/animated-search-bar/AnimatedSearchBar";

function App() {
  return (
    <div class="container">
      <section>
        <h1>🎨 Components Design CSS/JS</h1>
        <p>
          Collection de petits designs CSS/JS utilisables pour tes projets web.
        </p>
        <AnimatedSearchBar />
      </section>

      <section class="inverse full-bleed">
        <h2>🖱 Boutons</h2>
        <p>Composants interactifs avec effets : hover, ripple, glowing, etc.</p>
      </section>

      <section>
        <h2>⏳ Loaders</h2>
        <p>Animations de chargement CSS ou JavaScript, simples et efficaces.</p>
      </section>

      <section class="inverse full-bleed">
        <h2>💳 Cartes</h2>
        <p>
          Cartes avec effets 3D, overlays, transitions ou responsive design.
        </p>
      </section>

      <section>
        <h2>📦 Modales</h2>
        <p>Fenêtres modales accessibles, animées ou centrées avec overlay.</p>
      </section>

      <section class="inverse full-bleed">
        <h2>🧭 Navbars</h2>
        <p>
          Menus sticky, hamburgers responsives, barres horizontales ou
          verticales.
        </p>
      </section>
    </div>
  );
}

export default App;
