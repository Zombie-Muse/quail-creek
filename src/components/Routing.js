import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Home from './Home';
import CoveyCall from './CoveyCall/CoveyCall';
import About from './About';
import NeighborhoodWatch from './NeighborhoodWatch';
import Community from './Community/Community';
import Contact from './Contact';
import Documents from './Documents';
import Faq from './Faq';
import { AuthProvider } from '../context/AuthContext';
import Login from './Auth/Login';
import Register from './Auth/Register';

const Routing = () => {
  return (
    <AuthProvider>
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
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </AuthProvider>
  );
};

export default Routing;
