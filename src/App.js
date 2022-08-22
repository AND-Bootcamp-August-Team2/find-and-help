import React, {useEffect, useState}from 'react';
import Hero from './components/hero';
import Sidebar from './components/sidebar';
import Content from './components/content';
import Navbar from './components/navbar';

function App() {

  const [data, setData] = useState()

  useEffect( async () => {
    
    const data = await readOpportunities()
    setData(data)
  }, []);




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
