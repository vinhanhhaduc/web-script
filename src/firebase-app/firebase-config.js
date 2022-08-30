import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyD66PbEJfNvZpQF6O85VLxVgPo9Xs1UNBE',
  authDomain: 'admin-web-214be.firebaseapp.com',
  projectId: 'admin-web-214be',
  storageBucket: 'admin-web-214be.appspot.com',
  messagingSenderId: '176629236008',
  appId: '1:176629236008:web:482e28c83d618a4cef501d',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
