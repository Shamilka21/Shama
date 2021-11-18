import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseApp = initializeApp({
  apiKey: 'AIzaSyDqKtu5RtyebQiCwKsNa-J_0swwQbLGDSk',
  authDomain: 'market-place-shamil.firebaseapp.com',
  projectId: 'market-place-shamil',
  storageBucket: 'market-place-shamil.appspot.com',
  messagingSenderId: '355505523558',
  appId: '1:355505523558:web:00a169b12577dbeb8d56a7',
  measurementId: 'G-KM9VERM942',
});

export const auth = getAuth(firebaseApp);
