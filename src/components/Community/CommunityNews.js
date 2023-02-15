// import { db } from '../../firebase';
// import { collection, getDocs } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import client from '../../client';
// import moment from 'moment';

const CommunityNews = () => {
  const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    getUpdates();
  }, []);

  useEffect(() => {}, [data]);

  async function getUpdates() {
    client
      .fetch(
        `*[_type == "post"] {
        title,
        slug,
        body,
        mainImage {
          asset -> {
            _id,
            url
          },
          alt
        }
      }`
      )
      .then((data) => setData(data))
      .catch(console.error);
  }

  return (
    <div>
      <h1 className="text-2xl font-bold p-10">Updates!</h1>
      <h2>Behold! There are {data.length} updates!</h2>
    </div>
  );
};

export default CommunityNews;
