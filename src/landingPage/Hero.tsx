import { images } from "../assets/images"; // Ensure the path is correct

const Hero = () => {
  return (
    <div className="relative sm:h-[80vh] h-[50vh] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${images.students})` }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
    
    </div>
  );
}

export default Hero;
