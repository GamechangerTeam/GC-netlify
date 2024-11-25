import React from "react";
import "./page.scss";
import HomeScreen from "./sections/homeScreen/HomeScreen";
import WorkScreen from "./sections/homeScreen/workScreen/WorkScreen";


export default function About() {
  return (
    <main>
      <div className="container">
        <HomeScreen/>
        <WorkScreen/>
      </div>
    </main>
  );
}
