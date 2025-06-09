import DesignMenu from "../components/design-menu/DesignMenu";
import ScrollToTopButton from "../components/scroll-button/ScrollToTopButton";
import TextReveal from "../components/text-reveal/TextReveal";

const Home = () => (
  <section className="home" id="home">
    <TextReveal />
    <DesignMenu />
    <ScrollToTopButton />
  </section>
);

export default Home;
