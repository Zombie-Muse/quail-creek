import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import CoveyCall from './components/CoveyCall/CoveyCall';
import About from './components/About';
import NeighborhoodWatch from './components/NeighborhoodWatch';
import Community from './components/Community';
import Contact from './components/Contact';
import Documents from './components/Documents';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/covey-call" element={<CoveyCall />} />
        <Route exact path="/about" element={<About />} />
        <Route
          exact
          path="/neighborhood-watch"
          element={<NeighborhoodWatch />}
        />
        <Route exact path="/community" element={<Community />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/documents" element={<Documents />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
