import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAO3EiHqsWxhgmLcIEr2AwCQE9WgYuv2y8",
  authDomain: "disney-clone-64970.firebaseapp.com",
  projectId: "disney-clone-64970",
  storageBucket: "disney-clone-64970.appspot.com",
  messagingSenderId: "542428728603",
  appId: "1:542428728603:web:47af99be59e17356b9d7be",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
