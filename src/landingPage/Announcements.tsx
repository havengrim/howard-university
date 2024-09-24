import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Card, CardHeader, CardTitle, CardDescription } from "../components/ui/card";
import { GoCalendar } from "react-icons/go";
import { images } from "../assets/images.ts";

const AvailablePrograms = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Sample data for the available programs with icons
  const programs = [
    {
      title: "Bachelor of Science in Computer Science",
      description: "Gain in-depth knowledge and skills in computer science, software development, and data analysis.",
      image: images.announcement1, // Ensure you have this image in your assets
      date: "Available from September 2024",
      icon: <GoCalendar />,
    },
    {
      title: "Bachelor of Arts in Business Administration",
      description: "Learn the fundamentals of business management, marketing, and finance to prepare for a successful career.",
      image: images.announcement2, // Ensure you have this image in your assets
      date: "Available from September 2024",
      icon: <GoCalendar />,
    },
    {
      title: "Master of Science in Data Science",
      description: "Delve into advanced data analytics, machine learning, and big data technologies in our master's program.",
      image: images.announcement3, // Ensure you have this image in your assets
      date: "Available from September 2024",
      icon: <GoCalendar />,
    },
  ];

  return (
    <section className="sm:py-10 p-0 bg-primary-foreground relative">
      <div className="container-padding text-center">
        <div data-aos="fade-up">
          <h2 className="text-4xl md:text-6xl font-medium mb-2">Available Programs</h2>
          <p className="text-gray-600 mb-12">Explore our programs and find the right fit for you.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10" data-aos="fade-up">
          {programs.map((program, index) => (
            <Card key={index} className="!p-4 bg-white shadow-sm transition-transform transform hover:scale-105 rounded-xl relative cursor-pointer">
              <div className="relative">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-40 object-cover bg-cover rounded-xl transition-opacity duration-300"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-40 rounded-xl"></div>
              </div>

              <CardHeader className="p-4 text-start relative z-10">
                <CardTitle className="text-lg font-semibold mb-1 hover:text-blue-600 transition-colors duration-200">
                  {program.title}
                </CardTitle>
                <CardDescription className="text-sm text-gray-600">
                  {program.description}
                </CardDescription>
                <p className="text-sm text-gray-500 mt-6 flex gap-2 items-center pt-2">
                  {program.icon}
                  {program.date}
                </p>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AvailablePrograms;
