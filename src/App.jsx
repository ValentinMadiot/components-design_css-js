import Home from "./pages/Home";

import ProfileCard1 from "./components/profile-card-1/ProfileCard1";
import ProfileCard2 from "./components/profile-card-2/ProfileCard2";

import TabsHideArticle from "./components/tabs-hide-article/TabsHideArticle";

import LoadingAnimationDots from "./components/loading-animation-dots/LoadingAnimationDots";

import FaqToggleBtn from "./components/faq-toggle-btn/FaqToggleBtn";

import AnimatedSearchBar from "./components/animated-search-bar/AnimatedSearchBar";
import Countdown from "./components/countdown/Countdown";
import FloatingActionButton from "./components/floating-action-button/FloatingActionButton";
import RangeSlider from "./components/range-slider/RangeSlider";

import AudioVisualizer from "./components/audio-visualizer/AudioVisualizer";

function App() {
  return (
    <>
      <Home />

      <section className="section-grid1" id="design1">
        <ProfileCard1 />
        <ProfileCard2 />
      </section>

      <TabsHideArticle />

      <LoadingAnimationDots />

      <section className="section-grid2" id="design4">
        <FaqToggleBtn />
        <div className="section-grid2__right">
          <AnimatedSearchBar />
          <Countdown />
          <RangeSlider />
          <FloatingActionButton />
        </div>
      </section>

      <AudioVisualizer />
    </>
  );
}

export default App;
