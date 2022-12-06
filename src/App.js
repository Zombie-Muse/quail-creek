import Navigation from './components/navigation/Navbar2';
import Footer from './components/Footer/Footer';
import Routing from './components/Routing';
import './App.css';
import AuthContextProvider from './context/AuthContext';

function App() {
  return (
    <AuthContextProvider>
      <div className="App">
        <header>
          <Navigation />
        </header>
        <Routing />
        <footer>
          <Footer />
        </footer>
      </div>
    </AuthContextProvider>
  );
}

export default App;
