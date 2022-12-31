import { useAuth } from '../context/AuthContext';
import Community from './Community/Community';
import MainCarousel from './MainCarousel';

const Home = () => {
  const { currentUser } = useAuth();

  return (
    <div className="-z-20 bg-gray-300 justify-center m-0 ">
      <MainCarousel />
      <div className="max-w-screen-lg justify-center rounded-lg p-8 bg-gray-100 ">
        <Community />
      </div>
    </div>
  );
};

export default Home;
