import React from "react";
// import logo from "./logo.svg";
// import { Counter } from "./features/counter/Counter";
import "./App.css";
import Header from "./Header";
import SideBar from "./SideBar";
import Feed from "./Feed";
function App() {
  return (
    <div className="App">
      {/* Header       */}

      <Header />

      {/* App body     */}

      <div className="AppBody">
        {/* -> Sidebar   */}
        <SideBar />
        {/* -> Feed      */}
        <Feed />
        {/* -> Widgets   */}
      </div>
    </div>
  );
}

export default App;
