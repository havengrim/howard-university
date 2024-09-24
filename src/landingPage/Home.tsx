import  { useState, useEffect } from 'react';
import { Sugar } from 'react-preloaders';
import Navbar from '../components/Navbar';
import Hero from './Hero';
import AboutUs from './AboutUs';
import LatestNews from './LatestNews';
import Announcements from './Announcements';
import SuccessStories from './SuccessStories';
import StudentRegistration from './StudentRegistration';
import Footer from './Footer';

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set body styles when loading starts
    document.body.style.overflow = 'hidden';
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = '';
      document.body.style.position = ''; // Reset overflow when loading is complete
    }, 2000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = ''; 
      document.body.style.position = '';// Clean up on unmount
    };
  }, []);

  return (
    <div className=''>
      {loading ? (
        <Sugar /> // Display the preloader while loading
      ) : (
        <>
          <Navbar />
          <section className="bg-background h-full overflow-y-auto">
            <Hero />
            <AboutUs />
            <LatestNews />
            <Announcements/>
            <SuccessStories />
            <StudentRegistration />
            <Footer />
          </section>
        </>
      )}
    </div>
  );
};

export default Home;
