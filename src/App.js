import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App bg-blue-dark text-white overflow-x-hidden">
        <Navbar />
        <Home />
        <About />
        <Portfolio />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
