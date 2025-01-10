import { initializeApp, getApps } from 'firebase/app';
import { getAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// Configura Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCzlnT_gmjfXlENRb7PhcsS7RWpS2Jg6WU",
  authDomain: "resiwork-2e9bf.firebaseapp.com",
  projectId: "resiwork-2e9bf",
  storageBucket: "resiwork-2e9bf.firebasestorage.app",
  messagingSenderId: "273422035894",
  appId: "1:273422035894:web:0d086b8825416fad96af17",
  measurementId: "G-EYLVKJST9F"
};

// Verifica si ya hay alguna instancia de Firebase inicializada
let app;
if (getApps().length === 0) {
  // Si no hay instancias, inicializa Firebase
  app = initializeApp(firebaseConfig);
} else {
  // Si ya existe una instancia, obtén la primera
  app = getApps()[0];
}

// Accede a la instancia de autenticación utilizando getAuth
const auth = getAuth(app);

// Configura la persistencia con AsyncStorage
auth.setPersistence(getReactNativePersistence(ReactNativeAsyncStorage));
