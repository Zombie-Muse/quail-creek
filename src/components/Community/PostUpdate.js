import { useState, useEffect } from 'react';
import { db } from '../../firebase';

import { collection, addDoc, Timestamp } from 'firebase/firestore';
const PostUpdate = () => {
  const [title, setTitle] = useState('');
  const [dateStamp, setDateStamp] = useState('');
  const [body, setBody] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleFormSubmit(e) {
    const date = Timestamp.fromDate(new Date(dateStamp));
    e.preventDefault();
    if (title && dateStamp && body) {
      const updateCollRef = collection(db, 'updates');
      addDoc(updateCollRef, { title, date, body });

      try {
        setLoading(true);
        console.log('You submitted that shit. Go you!');
      } catch (e) {
        setError(e);
        alert("Failed to update! You're a failure");
        console.log(error);
      }
      setLoading(false);
      setTitle('');
      setDateStamp('');
      setBody('');
    } else {
      return;
    }
  }

  return (
    <div className="bg-blue-200 min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <form
        className="border rounded-lg bg-blue-600 p-4"
        onSubmit={handleFormSubmit}
      >
        <div className="bg-blue-400 p-6">
          <input
            id="update-title"
            value={title}
            name="title"
            type="title"
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 placeholder-gray-500 rounded-t-md bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:z-10 sm:text-sm"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="bg-blue-400 p-6">
          <input
            id="update-date"
            value={dateStamp}
            name="date"
            type="date"
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 placeholder-gray-500 rounded-t-md bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:z-10 sm:text-sm"
            placeholder="Date"
            onChange={(e) => setDateStamp(e.target.value)}
          />
        </div>

        <div className="bg-blue-400 p-6">
          <textarea
            id="update-body"
            value={body}
            name="body"
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 placeholder-gray-500 rounded-t-md bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:z-10 sm:text-sm"
            placeholder="Update content"
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <div>
          <button
            type="submit"
            className=" w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-sky-800 hover:bg-sky-900"
            disabled={loading}
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostUpdate;
