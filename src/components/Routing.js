
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import CoveyCall from './CoveyCall/CoveyCall';
import About from './About';
import NeighborhoodWatch from './NeighborhoodWatch';
import Community from './Community/Community';
import Contact from './Contact';
import Documents from './Documents';
import Faq from './Faq';
// import AuthContextProvider, { AuthProvider } from '../context/AuthContext';
import Login from './Auth/Login';
import Register from './Auth/Register';
import PostUpdate from './Community/PostUpdate';
import PrivateRoute from './PrivateRoutes';

const Routing = () => {
  return (
    <div className="min-h-screen">
      <Routes>
        <Route exact path="/about" element={<About />} />

        <Route element={<PrivateRoute />}>
          <Route exact path="/covey-call" element={<CoveyCall />} />
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/neighborhood-watch"
            element={<NeighborhoodWatch />}
          />
          <Route element={<Community />} path="/community" exact />
          <Route exact path="/documents" element={<Documents />} />
          <Route path="/post-update" element={<PostUpdate />} />
        </Route>
        <Route exact path="/contact" element={<Contact />} />
        {/* <Route exact path="/community" element={<Community />} /> */}
        <Route exact path="/faq" element={<Faq />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default Routing;
