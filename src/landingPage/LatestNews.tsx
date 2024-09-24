import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { images } from "../assets/images.ts";

const LatestNews = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Sample announcement data
  const announcements = [
    {
      title: "University Orientation 2024",
      description: "Join us for the annual orientation program.",
      image: images.orientation, // Replace with actual image path
      isMain: true,
    },
    {
      title: "Scholarship Opportunities",
      description: "Apply for the new scholarship programs available.",
      image: images.course, // Replace with actual image path
    },
    {
      title: "New Course Offerings",
      description: "Explore our new courses available this semester.",
      image: images.coding, // Replace with actual image path
    },
    {
      title: "Campus Events",
      description: "Check out the upcoming events on campus.",
      image: images.event, // Replace with actual image path
    },
    {
      title: "Health and Safety Guidelines",
      description: "Stay safe with our updated health protocols.",
      image: images.health,
    },
  ];

  return (
    <section className="py-20 bg-gray-50 relative">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-8" data-aos="fade-up">
          <h2 className="text-4xl md:text-6xl font-medium">Latest News</h2>
          <p className="text-gray-600 mt-2">Stay up-to-date with the latest news and updates</p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-8 gap-4 py-10" data-aos="fade-up">
          {announcements.filter(a => a.isMain).map((announcement, index) => (
            <div className="block md:hidden " key={index}>
              {/* Mobile view with large image */}
              <Card className="relative h-64 bg-cover bg-center overflow-hidden rounded-xl cursor-pointer">
                <img
                  src={announcement.image}
                  alt={announcement.title}
                  className="w-full h-full object-cover rounded-xl transition-opacity duration-300"
                />
                     <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-0"></div>
                <CardHeader className="absolute inset-0 flex items-start justify-end text-white p-4">
                  <CardTitle>{announcement.title}</CardTitle>
                  <CardDescription className="mt-1">{announcement.description}</CardDescription>
                </CardHeader>
              </Card>
            </div>
          ))}
          {announcements.filter(a => a.isMain).map((announcement, index) => (
            <Card
              key={index}
              className="relative hidden md:block h-full bg-cover bg-center overflow-hidden rounded-xl cursor-pointer"
              style={{ backgroundImage: `url(${announcement.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-0"></div>
              <CardHeader className="absolute inset-0 flex items-start justify-end text-white p-6">
                <CardTitle>{announcement.title}</CardTitle>
                <CardDescription className="mt-2">{announcement.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {announcements.filter(a => !a.isMain).map((announcement, index) => (
              <Card
                key={index}
                className="relative h-64 bg-cover bg-center overflow-hidden rounded-xl cursor-pointer"
                style={{ backgroundImage: `url(${announcement.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-0"></div>
                <CardHeader className="absolute inset-0 flex items-start justify-end text-white p-4">
                  <CardTitle>{announcement.title}</CardTitle>
                  <CardDescription className="mt-1">{announcement.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
