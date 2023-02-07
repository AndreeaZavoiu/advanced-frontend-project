import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDyXAyrDyxbgyyj3le7-ZAfRUfFwFJo0Q0",
  authDomain: "hotel-dashboard-a025f.firebaseapp.com",
  projectId: "hotel-dashboard-a025f",
  storageBucket: "hotel-dashboard-a025f.appspot.com",
  messagingSenderId: "141916863269",
  appId: "1:141916863269:web:45fec62adaec59082e78cc",
  measurementId: "G-VM38BTFZY7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);