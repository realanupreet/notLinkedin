// import React from "react";
// // import logo from "./logo.svg";
// // import { Counter } from "./features/counter/Counter";
// import "./App.css";
// import Header from "./Header";
// import SideBar from "./SideBar";
// import Feed from "./Feed";

// function App() {
//   return (
//     <div className="App">
//       {/* Header       */}

//       <Header />

//       {/* App body     */}

//       <div className="AppBody">
//         {/* -> Sidebar   */}
//         <SideBar />
//         {/* -> Feed      */}
//         <Feed />
//         {/* -> Widgets   */}
//       </div>
//     </div>
//   );
// }

// export default App;
import { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
import "./App.css";
// import { login, logout, selectUser } from "./features/userSlice";
import Feed from "./Feed";
// import { auth } from "./firebase";
import Header from "./Header";
// import Login from "./Login";
import Sidebar from "./Sidebar";
import Widgets from "./Widgets";

function App() {
  // const userState = useSelector(selectUser);
  // const { user } = userState;
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   auth.onAuthStateChanged((userAuth) => {
  //     if (userAuth) {
  //       dispatch(
  //         login({
  //           email: userAuth.email,
  //           uid: userAuth.uid,
  //           displayName: userAuth.displayName,
  //           photoUrl: userAuth.photoURL,
  //         })
  //       );
  //     } else {
  //       dispatch(logout());
  //     }
  //   });

  //   //eslint-disable-next-line
  // }, []);

  return (
    <div className="app">
      <Header />

      {/* {!user ? (
        <Login />
      ) : ( */}
      <div className="app__body">
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
      {/* ) */}
      {/* } */}
    </div>
  );
}

export default App;
