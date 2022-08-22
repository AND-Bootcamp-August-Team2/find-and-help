import React, {useEffect, useState}from 'react';
import Hero from './components/hero';
import Sidebar from './components/sidebar';
import Content from './components/content';
import Navbar from './components/navbar';
import { readOpportunities, addLocations, writeOpportunities } from './firebase/firebaseHandler'

function App() {
""
  const [opportunities, setOpportunities] = useState([])

  useEffect( () => {
    const loadData = async () => {
      const data = await readOpportunities()
      setOpportunities(data)
      //Testing write opportunities
      writeOpportunities("10/08/22", "11/08/22", "descrip1","Leeds","Opportunity 1",5)
    }
    
    loadData()

  }, []);
  
  //Print opportunity for testing
  console.log(opportunities[0])

  return (
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
  );
}

export default App;
