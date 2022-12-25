
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import MiddleSection from './containers/middleSection';
import Slider from './compoents/Silder/Slider';
import Roadmap from './containers/Roadmap';
import Footer from './containers/Footer';
import Navbar from './containers/Navbar';
import "animate.css/animate.min.css";
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="App">
      <Navbar data-aos="fade-up" />

      <Roadmap />
      <Footer />
    </div>
  );
}

export default App;
