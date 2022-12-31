import MainCarousel from './MainCarousel';
import Nearby from './Nearby';
import NewsletterSignup from './NewsletterSignup';
import Welcome from './Welcome';

const Home = () => {
  return (
    <div className=" -z-20 bg-gray-300 m-0 ">
      <MainCarousel />

      <div className="m-auto max-w-screen-lg rounded-lg p-8 bg-gray-100 ">
        <Welcome />
        <Nearby />
        <NewsletterSignup />
      </div>
    </div>
  );
};

export default Home;
