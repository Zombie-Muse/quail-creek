import Navigation from './components/navigation/NavBar';
import Footer from './components/Footer/Footer';
import Routing from './components/Routing';
import './App.css';
import AuthContextProvider from './context/AuthContext';
import 'tw-elements';

function App() {
  return (
    <AuthContextProvider>
      <div className="App bg-gray-200 ">
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
