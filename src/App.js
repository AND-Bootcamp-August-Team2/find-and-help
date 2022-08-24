import React, { useEffect, useState } from "react";
import Hero from "./components/hero";
import Sidebar from "./components/sidebar";
import Content from "./components/content";
import Navbar from "./components/navbar";
import { AppContextProvider } from "./utils/appContextProvider";
import { readOpportunities } from "./firebase/firebaseHandler";

function App() {
  return (
    <AppContextProvider>
      <div
        className="grid grid-areas-smlayout grid-cols-smlayout grid-rows-smlayout 
    md:grid-areas-mdlayout md:grid-cols-mdlayout md:grid-rows-mdlayout 
    h-full bg-gray-100"
      >
        <Hero />
        <Navbar />
        <Sidebar />
        <Content />
      </div>
    </AppContextProvider>
  );
}

export default App;
