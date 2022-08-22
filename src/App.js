import React, {useEffect, useState}from 'react';
import Hero from './components/hero';
import Sidebar from './components/sidebar';
import Content from './components/content';
import Navbar from './components/navbar';
import { readOpportunities } from './firebase/firebaseHandler'

function App() {
""
  const [dataCheck, setDataCheck] = useState([])

  useEffect( () => {
    const loadData = async () => {
      const data = await readOpportunities()
      setDataCheck(data)
    }
    
    loadData()

  }, []);
  
  console.log(dataCheck)

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
