import "./index.css";
// SECTION 1
import TextReveal from "./components/text-reveal/TextReveal";

// SECTION 2
import AnimatedSearchBar from "./components/animated-search-bar/AnimatedSearchBar";
import AudioVisualizer from "./components/audio-visualizer/AudioVisualizer";
import Countdown from "./components/countdown/Countdown";
import FloatingActionButton from "./components/floating-action-button/FloatingActionButton";
import LoadingAnimationDots from "./components/loading-animation-dots/LoadingAnimationDots";
import RangeSlider from "./components/range-slider/RangeSlider";

// SECTION 3
import ProfileCard1 from "./components/profile-card-1/ProfileCard1";
import ProfileCard2 from "./components/profile-card-2/ProfileCard2";

// SECTION 4
import FaqToggleBtn from "./components/faq-toggle-btn/FaqToggleBtn";
import TabsHideArticle from "./components/tabs-hide-article/TabsHideArticle";

// SECTION 5
import ColorGradientTool from "./components/color-gradient-tool/ColorGradientTool";

function App() {
  return (
    <div className="container">
      <section className="section section-text-reveal">
        <TextReveal />
      </section>

      <section className="section section-components inverse full-bleed">
        <AnimatedSearchBar />
        <FloatingActionButton />
        <Countdown />
        <LoadingAnimationDots />
        <RangeSlider />
        <AudioVisualizer />
      </section>

      <section className="section section-profiles">
        <ProfileCard1 />
        <ProfileCard2 />
      </section>

      <section className="section section-faq-tabs inverse full-bleed">
        <FaqToggleBtn />
        <TabsHideArticle />
      </section>

      <section className="section section-color-tool">
        <ColorGradientTool />
      </section>
    </div>
  );
}

export default App;
