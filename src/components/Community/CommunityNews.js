import { db } from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import moment from 'moment';

const CommunityNews = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getUpdates();
  }, []);

  useEffect(() => {}, [data]);

  async function getUpdates() {}

  return (
    <div>
      <h1 className="text-2xl font-bold p-10">Updates!</h1>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 place-content-center">
        {!loading &&
          data.map((update) => (
            <li key={update.id} className="">
              <div className="border p-10 h-[400px] border-green-600 shadow-xl rounded-lg">
                <h1 className="text-2xl font-bold pt-4 pb-2">
                  {update.data.title}
                </h1>

                <p className="text-sm pb-6 pt-0">
                  {/* {update.data.date} */}
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

export default CommunityNews;
