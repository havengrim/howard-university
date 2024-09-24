import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { GoCalendar } from "react-icons/go";
import { images } from "../assets/images.ts";

const Announcements = () => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  // Sample data for the announcements with icons
  const announcements = [
    {
      title: "University Orientation 2024",
      description: "Join us for the annual orientation program. This is a great opportunity to learn about campus life, academic resources, and meet fellow students. ",
      image: images.announcement1,
      date: "August 1, 2024",
      icon: <GoCalendar />,
    },
    {
      title: "Exam Schedule Released",
      description: "View the exam schedule for this semester. Be sure to check the dates and prepare accordingly to avoid any last-minute surprises. ",
      image: images.announcement2,
      date: "August 10, 2024",
      icon: <GoCalendar />,
    },
    {
      title: "New Course Launch: AI Fundamentals",
      description: "Explore the basics of AI and machine learning in our new course launch. This course is designed to give you a solid foundation and understanding of key concepts in AI field. ",
      image: images.announcement3,
      date: "August 15, 2024",
      icon: <GoCalendar />,
    },
  ];

  return (
    <section className="sm:py-10 p-0 bg-gray-50 relative">
      <div className="container-padding text-center">
        <div data-aos="fade-up">
            <h2 className="text-4xl md:text-6xl font-medium mb-2">Announcements</h2>
            <p className="text-gray-600 mb-12">Stay informed with the latest announcements</p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10" data-aos="fade-up">
        {announcements.map((announcement, index) => (
             <Card key={index} className="!p-4 bg-white shadow-sm transition-transform transform hover:scale-105 rounded-xl relative" >
             <div className="relative">
               <img
                 src={announcement.image}
                 alt={announcement.title}
                 className="w-full h-40 object-cover  bg-cover rounded-xl transition-opacity duration-300"
               />
               {/* Gradient Overlay */}
               <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-40 rounded-xl"></div>
             </div>
             
             <CardHeader className="p-4 text-start relative z-10">
               <CardTitle className="text-lg font-semibold mb-1 hover:text-blue-600 transition-colors duration-200">
                 {announcement.title}
               </CardTitle>
               <CardDescription className="text-sm text-gray-600">
                 {announcement.description}
               </CardDescription>
               <p className="text-sm text-gray-500 mt-4 flex gap-2 items-center">
                 {announcement.icon}
                 {announcement.date}
               </p>
             </CardHeader>
           </Card>
           
             
                ))}
        </div>
      </div>
    </section>
  );
};

export default Announcements;
