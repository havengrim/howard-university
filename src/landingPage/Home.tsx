import  { useState, useEffect } from 'react';
import { Sugar } from 'react-preloaders';
import Navbar from '../components/Navbar';
import Hero from './Hero';

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <Sugar /> // Display the preloader while loading
      ) : (
        <>
          <Navbar />
          <section className="bg-background h-full">
            <Hero />
          </section>
        </>
      )}
    </div>
  );
};

export default Home;
