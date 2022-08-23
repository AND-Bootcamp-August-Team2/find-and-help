import React, {useEffect, useState}from 'react';
import Hero from './components/hero';
import Sidebar from './components/sidebar';
import Content from './components/content';
import Navbar from './components/navbar';
import { LocationContextProvider } from './contexts/locationContext';
import { readOpportunities } from './firebase/firebaseHandler'

function App() {
  const [opportunities, setOpportunities] = useState([])

  useEffect( () => {
    const loadData = async () => {
      const opportunitiesData = await readOpportunities()
      setOpportunities(opportunitiesData)
    }
    loadData()
  }, []);

  // leave it here so we're using opportunities for now to prevent warnings.
  console.log(opportunities[0])

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
