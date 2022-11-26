import firebase from '../Firebase';
import { useState, useEffect } from 'react';

const Community = () => {
  const ref = firebase.firestore().collection('updates');
  console.log(ref);

  return (
    <div>
      <p>Here is the Community. You are impressed.</p>
    </div>
  );
};

export default Community;
