import Community from './Community/Community';
import MainCarousel from './MainCarousel';
import Welcome from './Welcome';

const Home = () => {
  return (
    <div className=" -z-20 bg-gray-300 m-0 ">
      <MainCarousel />

      <div className="m-auto my-10 max-w-screen-lg rounded-lg p-8 bg-gray-100 ">
        <Welcome />
        <Community />
      </div>
    </div>
  );
};

export default Home;
