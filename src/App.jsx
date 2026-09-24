import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Craft from './components/Craft/Craft';
import Experience from './components/Experience/Experience';
import End from './components/End/End';

const App = () => {
  return (
    <>
      <section className="container">
        <Home />
        <About />
        <Craft />
        <Experience />
        <End />
      </section>
    </>
  );
};

export default App;
