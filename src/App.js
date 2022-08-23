import React, {useEffect, useState}from 'react';
import Hero from './components/hero';
import Sidebar from './components/sidebar';
import Content from './components/content';
import Navbar from './components/navbar';
import { LocationContextProvider } from './contexts/locationContext';
//import writeOpportunities when needed
import { readOpportunities, readLocations } from './firebase/firebaseHandler'

function App() {
""
  const [opportunities, setOpportunities] = useState([])
  const [locations, setLocations] = useState([])

  useEffect( () => {
    const loadData = async () => {
      const opportunitiesData = await readOpportunities()
      const locationsData = await readLocations()
      setOpportunities(opportunitiesData)
      setLocations(locationsData)

      // Testing write opportunities
      // writeOpportunities("10/08/22", "11/08/22", "descrip1","Leeds","Opportunity 1",5)
    }
    
    loadData()

  }, []);
  
  // testing read locations (list of objects)
  // console.log(locations)
  
  // testing printing out location as text
  for (let i = 0; i < locations.length; i++) {
    console.log(locations[i].location)
  }

  for (let i = 0; i < opportunities.length; i++) {
    console.log(opportunities[i])
  }
  
  

  return (
    <LocationContextProvider>
      <div
        className='grid grid-areas-smlayout grid-cols-smlayout grid-rows-smlayout 
    md:grid-areas-mdlayout md:grid-cols-mdlayout md:grid-rows-mdlayout 
    h-full bg-gradient-to-br from-slate-300 to-slate-200 bg-auto'
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
