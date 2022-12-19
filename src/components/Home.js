import { useAuth } from '../context/AuthContext';
import Community from './Community/Community';

const Home = () => {
  const { currentUser } = useAuth();

  return (
    <div className="mx-[10%]">
      <h1 className="text-2xl font-bold p-10">Home page</h1>
      <p>Photos go here? Maybe?</p>
      <p>{currentUser ? `${currentUser.email}` : `${''}`}</p>
      <p className="justify-start items-start">
        {/* {JSON.stringify(currentUser, null, 2)} */}
      </p>
      <Community />
    </div>
  );
};

export default Home;
