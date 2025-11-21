import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Team from "./components/Team";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import Announcements from "./components/Announcements";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="w-full min-h-screen bg-white text-gray-900">
      <Header />
      <Hero />
      <Services />
      <About />
      <Team />
      <Contact />
      <FAQ />
      <Announcements />
      <Footer />
    </div>
  );
};

export default App;
