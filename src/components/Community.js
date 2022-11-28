import {db} from '../firebase';
import {collection, getDocs, onSnapshot} from 'firebase/firestore'
import { useState, useEffect } from 'react';

const Community = () => {
  // const ref = db.collection('updates');
  const ref = getDocs(collection(db, "updates"))

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
//TODO fix this shit
  async function getData() {
    const docItems = await onSnapshot(ref, (querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setData(docItems);
      setLoading(false);
    });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <p>Here is the Community. You are impressed!</p>
      {loading === false &&
        data.map((stuff) => (
          <div key={stuff}>
            <h1>{stuff.title}</h1>
            <p>{stuff.body}</p>
          </div>
        ))}
    </div>
  );
};

export default Community;
