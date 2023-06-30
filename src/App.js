import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Navbar from "./components/Navbar";
import Work from "./components/work/Work";
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App bg-blue-dark text-white overflow-x-hidden">
        <Navbar />
        <Hero />
        <About />
        <Work />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
