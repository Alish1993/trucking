import React, { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Background from './components/background/Background';
import Hero from './components/hero/Hero';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Services from './components/pages/Services';
import Contact from './components/pages/Contact';

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/about', element: <About /> },
        { path: '/services', element: <Services /> },
        { path: '/contact', element: <Contact /> },
      ],
    },
  ]);
  let heroData = [
    { text1: 'Dive intro', text2: 'What is your style?' },
    { text1: 'Discover ', text2: 'Trucking solutions' },
    { text1: 'Get in touch', text2: 'Let us know ' },
  ];

  useEffect(() => {
    setInterval(() => {
      setHero((count) => (count === 2 ? 0 : count + 1));
    }, 10000);
  }, []);

  const [hero, setHero] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);


  return (
    <div>
      <Background playStatus={playStatus} hero={hero} />
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
