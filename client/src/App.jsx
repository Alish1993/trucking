import React, { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Background from './components/background/Background';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';

export default function App() {
  let heroData = [
    { text1: 'Dive intro', text2: 'What is your style?' },
    { text1: 'Discover the best', text2: 'Trucking solutions for you' },
    { text1: 'Get in touch', text2: 'Let us know how we can help you' },
  ];

  useEffect(() =>{
    setInterval(() => {
      setHero((count)=>{return count===2?0:count+1})
    },3000)
  },[])

  const [hero, setHero] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [],
    },
  ]);

  return (
    <div>
      <Background playStatus={playStatus} hero={hero} />
      <Navbar />
      <Hero
        setPlayStatus={setPlayStatus}
        heroData={heroData[hero]}
        hero={hero}
        setHero={setHero}
        playStatus={playStatus}
      />
      <RouterProvider router={router} />
    </div>
  );
}
