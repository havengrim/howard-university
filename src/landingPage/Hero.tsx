import { useEffect } from 'react';
import { gsap } from 'gsap';
import { images } from "../assets/images"; // Ensure the path is correct

const Hero = () => {
  useEffect(() => {
    gsap.fromTo(".hero-text", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1.5, ease: "power3.out", delay: 0.5 });
  }, []);

  return (
    <div className="relative sm:h-[80vh] h-[50vh] bg-cover bg-center bg-no-repeat " style={{ backgroundImage: `url(${images.students})` }}>
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-0"></div>

      {/* Content */}
      <div className="relative z-10 flex items-end justify-start h-full container-padding">
        <h1 className="hero-text text-4xl sm:text-6xl md:text-8xl font-light text-white mb-10 text-center sm:text-left">
          Empower the Future <br /> at Howard University
        </h1>
      </div>
    </div>
  );
};

export default Hero;
