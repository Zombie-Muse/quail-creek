import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import CoveyCall from './CoveyCall/CoveyCall';
import About from './About';
import NeighborhoodWatch from './NeighborhoodWatch';
import Community from './Community';
import Contact from './Contact';
import Documents from './Documents';
import Faq from './Faq';
import Login from './Login';
import { AuthProvider } from '../context/AuthContext';

const Routing = () => {
  return (
    <div className="min-h-screen">
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
        <Route exact path="/faq" element={<Faq />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default Routing;
