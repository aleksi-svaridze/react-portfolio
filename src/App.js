import About from "./components/About";
import Contact from "./components/contact/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Work from "./components/work/Work";
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App bg-blue-dark text-white overflow-x-hidden">
        <Navbar />
        <Home />
        <About />
        <Work />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
