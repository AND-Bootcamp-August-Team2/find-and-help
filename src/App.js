import React from 'react';
import Hero from './components/hero';
import Sidebar from './components/sidebar';
import Content from './components/content';
import Navbar from './components/navbar';
import { LocationContextProvider } from './contexts/locationContext';

function App() {
  return (
    <LocationContextProvider>
      <div
        className="grid grid-areas-smlayout grid-cols-smlayout grid-rows-smlayout 
    md:grid-areas-mdlayout md:grid-cols-mdlayout md:grid-rows-mdlayout 
    h-full bg-gradient-to-br from-red-50 to-red-100"
      >
        <Hero />
        <Navbar />
        <Sidebar />
        <Content />
      </div>
    </LocationContextProvider>
  );
}

export default App;
