import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Work from "./components/work/Work";
import Footer from './components/footer/Footer';
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App bg-blue-dark text-white overflow-x-hidden">
        <Header />
        <About />
        <Work />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
