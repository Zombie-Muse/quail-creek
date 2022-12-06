import { useAuth } from '../context/AuthContext';

const Home = () => {
  const { currentUser } = useAuth();

  // const user = () => {
  //   if (currentUser) {
  //     return <p>{`The current user is ${currentUser.email}`}</p>;
  //   }
  // };
  return (
    <div className="mx-[10%]">
      <h1 className="text-2xl font-bold p-10">Home page</h1>
      <span>{`The current user is: ${currentUser}`}</span>
    </div>
  );
};

export default Home;
