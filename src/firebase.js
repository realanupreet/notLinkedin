import firebase from "firebase/";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAZ3mcwlVuxGGwaxNyjPuWdT2oiYj2Xeec",
  authDomain: "linkedin-clone-2dc4d.firebaseapp.com",
  projectId: "linkedin-clone-2dc4d",
  storageBucket: "linkedin-clone-2dc4d.appspot.com",
  messagingSenderId: "100891023534",
  appId: "1:100891023534:web:9e50d9facaa273d981b53f"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
// // Import the functions you need from the SDKs you need
// import * as firebase from "firebase/compat/app";
// import { initializeApp } from "firebase/compat/app";
// import "firebase/compat/firestore";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCBQ4dRltyhDtsJhrAw1Ax92TV8RCTWm5w",
//   authDomain: "notevenlinkedin.firebaseapp.com",
//   projectId: "notevenlinkedin",
//   storageBucket: "notevenlinkedin.appspot.com",
//   messagingSenderId: "517129053798",
//   appId: "1:517129053798:web:7e0a1414a897d82144efa7",
//   measurementId: "G-SGGBECVK39"
// };

// // Initialize Firebase
// const app = firebase.default.initializeApp(firebaseConfig);
// const db = app.firestore();
// let dbstore;
// function getPosts() {
//   console.log("inside get posts");
//   db.collection("posts").onSnapshot((snapshot) => {
//     console.log("snapshot is ", snapshot);
//     // setPosts(
//     //   snapshot.docs.map((doc) => ({
//     //     id: doc.id,
//     //     data: doc.data()
//     //   }))
//     // );
//     console.log(
//       "here",
//       snapshot.docs.map((doc) => ({
//         id: doc.id,
//         data: doc.data()
//       }))
//     );
//   });
//   console.log("db returned here is", db);
//   dbstore = db;
//   console.log("dbstore", dbstore);
// }
// getPosts();
// console.log("dbstore before export", dbstore);
// export default db;
// console.log("dbstore after export", dbstore);
