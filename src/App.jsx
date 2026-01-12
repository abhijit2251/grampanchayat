import TopBar from "./components/TopBar";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import HeroSlider from "./components/HeroSlider";
import Footer from "./components/Footer";
import VillageInfo from "./components/VillageInfo";
import TeamSection from "./components/TeamSection";
import YojanaSection from "./components/YojanaSection";
import Schemes from "./components/Schemes";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <TopBar />
      <Header />
      <Navbar />
      <HeroSlider />
      <VillageInfo />
      <TeamSection />
      <YojanaSection />
      <Schemes />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
