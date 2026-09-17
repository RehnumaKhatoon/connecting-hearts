import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import About from "./components/About/About";
import Pricing from "./components/Pricing/Pricing";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";
import Safety from "./components/Safety/Safety";
import "./styles/global.scss";
export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <About />
        <Pricing />
        <FAQ />
        <Safety />
      </main>
      <Footer />
    </>
  );
}
