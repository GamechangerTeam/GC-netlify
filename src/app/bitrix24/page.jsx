import Head from "next/head";
import React from "react";
import "./bitrix24.scss";
import Link from "next/link";
import TitleSection from "./sections/Home/HomeScreen";
import BitrixOverviewScreen from "./sections/Bitrix-Overview/BitrixOverviewScreen";
import Navigation from "./components/bitrix-overview-componets/navigation/Navigation";
export const metadata = {
  title: "Gamechaner - Что такое Bitrix24",
  description: "Generated by create next app",
};

export default function Bitrix24() {
  return (
    <main className="main">
      <div className="container">
        <TitleSection />
        <BitrixOverviewScreen />
        <Navigation />
      </div>
    </main>
  );
}
