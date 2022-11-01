import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
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
      <Router>
        <Container>
          <Navigation />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/covey-call" exact element={<CoveyCall />} />
            <Route path="/about" exact element={<About />} />
            <Route path="/neighborhood-watch" element={<NeighborhoodWatch />} />
            <Route path="/community" element={<Community />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/documents" element={<Documents />} />
          </Routes>
          <Footer />
        </Container>
      </Router>
    </div>
  );
}

export default App;
