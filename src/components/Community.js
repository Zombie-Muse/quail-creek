import db from '../Firebase';
import { useState, useEffect } from 'react';

const Community = () => {
  const ref = db.collection('updates');

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getData() {
    await ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setData(items);
      setLoading(false);
    });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <p>Here is the Community. You are impressed.</p>
      {console.log(data)}
      {loading === false &&
        data.map((stuff) => (
          <div key={stuff}>
            <h1>{stuff.title}</h1>
            {/* <p>{stuff.date}</p> */}
            <p>{stuff.body}</p>
          </div>
        ))}
    </div>
  );
};

export default Community;
