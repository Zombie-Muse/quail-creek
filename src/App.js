import Navigation from './components/navigation/Navbar2';
import Footer from './components/Footer/Footer';
import Routing from './components/Routing';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <Navigation />
      </header>
      <Routing />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
