import { db } from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import moment from 'moment';
import { useAuth } from '../../context/AuthContext';

const Community = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const { currentUser } = useAuth();

  useEffect(() => {
    getUpdates();
  }, []);

  useEffect(() => {}, [data]);

  async function getUpdates() {
    const ref = collection(db, 'updates');
    getDocs(ref)
      .then((res) => {
        const updates = res.docs.map((doc) => ({
          data: doc.data(),
          id: doc.id,
        }));
        setData(updates);
      })
      .catch((err) => console.log(err.message));
  }

  // function formatDate(date) {
  //   date = Timestamp.fromDate(new Date());
  //   console.log(date);
  //   return date;
  // }

  return (
    <div>
      {/* <button
        className="text-xl font-semibold border bg-blue-500 rounded-md p-4"
        onClick={() => getUpdates()}
      >
        Get 'em
      </button> */}
      <h1 className="text-2xl font-bold p-10">
        Here is the Community. You are impressed!
      </h1>
      {/* <p>Current User: {currentUser}</p> */}
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 place-content-center">
        {loading === false &&
          data.map((update) => (
            <li key={update.id} className="">
              <div className="border p-10 h-[400px] border-green-600 shadow-xl rounded-lg">
                <h1 className="text-2xl font-bold pt-4 pb-2">
                  {update.data.title}
                </h1>

                <p className="text-sm pb-6 pt-0">
                  {moment
                    .utc(update.data.date.toDate().toString())
                    .format('LL')}
                </p>
                <p>{update.data.body}</p>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Community;
