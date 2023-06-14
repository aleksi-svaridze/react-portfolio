import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import { NavbarDesktop, NavbarMobile } from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Footer from './components/Footer';

function App() {
  return (
    <div className="App bg-blue-dark text-white">
      <header className="container">
        <NavbarDesktop />
        <Home />
        <About />
        <Portfolio />
        <Contact />
        <Footer />
      </header>
    </div>
  );
}

export default App;
