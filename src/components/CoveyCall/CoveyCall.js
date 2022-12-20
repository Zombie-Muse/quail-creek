import { db } from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import moment from 'moment';

const CoveyCall = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getUpdates();
  }, []);

  useEffect(() => {}, [data]);

  async function getUpdates() {
    const ref = collection(db, 'covey-call');
    getDocs(ref)
      .then((res) => {
        const latestIssue = res.docs.map((doc) => ({
          data: doc.data(),
          id: doc.id,
        }));
        setData(latestIssue);
      })
      .catch((err) => console.log(err.message));
  }

  return (
    <div>
      <h1 className="text-2xl font-bold p-10">Covey Call</h1>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 place-content-center">
        {!loading &&
          data.map((latestIssue) => (
            <li key={latestIssue.id} className="">
              <div className="border p-10 h-[400px] border-green-600 shadow-xl rounded-lg">
                <h1 className="text-2xl font-bold pt-4 pb-2">
                  Volume:
                  {latestIssue.data.volume}
                </h1>
                <p>Issue: {latestIssue.data.issue}</p>
                <a
                  href={latestIssue.data.url}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Latest Issue
                </a>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default CoveyCall;
