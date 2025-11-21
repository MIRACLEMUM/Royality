import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Team from "./components/Team";

import FAQ from "./components/FAQ";
import Contact from "./components/Contact";


import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="w-full min-h-screen bg-white text-gray-900">
      <Header />
      <Hero />
      <Services />
      <About />
      <Team />
      
      <FAQ />
    <Contact />
      <Footer />
    </div>
  );
};

export default App;
