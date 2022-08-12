import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAyrtVuWphUQvsNl8_1GlIkrWxittPhI34',
  authDomain: 'restaurant-app-ce761.firebaseapp.com',
  databaseURL: 'https://restaurant-app-ce761-default-rtdb.firebaseio.com',
  projectId: 'restaurant-app-ce761',
  storageBucket: 'restaurant-app-ce761.appspot.com',
  messagingSenderId: '962328345163',
  appId: '1:962328345163:web:ca54b18f37785aec136bce',
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
