import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { GoTrophy } from "react-icons/go";
import { images } from "../assets/images.ts"; 

const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div className="container-padding">
      <div className="py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-20 gap-5 w-full">
          <div data-aos="fade-right">
            <span className="text-4xl md:text-6xl font-regular">Academic Excellence</span>
          </div>
          <div data-aos="fade-left">
            <p className="text-sm md:text-base text-gray-600">
              Broad term that encompasses various elements of a student's performance and achievements in the educational sphere. It refers to the highest level of academic performance and often includes a combination of the following attributes.
            </p>
          </div>
        </div>

        <section className="py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-20 gap-10 w-full">
                <div className="flex flex-col justify-between gap-10">
                <div className="p-6 border-l-2 flex flex-col gap-6" data-aos="fade-right">
                    <div className="p-3 rounded-full bg-primary w-10 h-10 flex items-center justify-center">
                    <GoTrophy className="text-white h-5 w-5" />
                    </div>
                    <div className="flex flex-col gap-3">
                    <span className="uppercase font-bold text-sm text-gray-700">Top-Ranked Programs</span>
                    <p className="text-gray-600 font-medium leading-relaxed">
                        Our university offers a wide range of undergraduate, graduate, and professional programs that are recognized globally for their excellence.
                    </p>
                    </div>
                </div>

                <div className="p-6 border-l-2 flex flex-col gap-6" data-aos="fade-right">
                    <div className="p-3 rounded-full bg-primary w-10 h-10 flex items-center justify-center">
                    <GoTrophy className="text-white h-5 w-5" />
                    </div>
                    <div className="flex flex-col gap-3">
                    <span className="uppercase font-bold text-sm text-gray-700">Personalized Learning</span>
                    <p className="text-gray-600 font-medium leading-relaxed">
                        Benefit from small class sizes and personalized attention that ensure you receive the support you need to succeed.
                    </p>
                    </div>
                </div>

                <div className="p-6 border-l-2 flex flex-col gap-6" data-aos="fade-right">
                    <div className="p-3 rounded-full bg-primary w-10 h-10 flex items-center justify-center">
                    <GoTrophy className="text-white h-5 w-5" />
                    </div>
                    <div className="flex flex-col gap-3">
                    <span className="uppercase font-bold text-sm text-gray-700">Innovative Research</span>
                    <p className="text-gray-600 font-medium leading-relaxed">
                        Engage in cutting-edge research alongside renowned faculty members who are leaders in their fields.
                    </p>
                    </div>
                </div>
            </div>
                <img 
                src={images.schoolBuilding} 
                alt="school building" 
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="300" 
                className="sm:rounded-bl-[250px] rounded-bl-[100px] h-full shadow-2xl  border-white object-cover transform scale-105 hover:scale-110 transition-all duration-500 ease-in-out cursor-pointer"
                />
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
