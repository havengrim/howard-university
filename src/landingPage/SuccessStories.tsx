import { Card } from "../components/ui/card"; // Import Card component
import { images } from "../assets/images.ts";

const SuccessStories = () => {
  return (
    <section className="py-10 bg-primary-foreground relative h-full">
      <div className="container mx-auto px-4">
        <Card className="relative h-full bg-cover bg-center rounded-xl cursor-pointer">
          <img 
            src={images.cheerful} 
            alt="Empower the Future at Howard University" 
            className="w-full h-[50vh] sm:h-[60vh] lg:h-[70vh] object-cover rounded-xl transition-opacity duration-300" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-0"></div>
          <div className="absolute inset-0 flex items-end justify-start z-10 p-4">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-regular text-white mb-5 text-left">
              Success Stories
            </h1>
          </div>

          {/* Overlapping Card */}
          <Card className="absolute hidden sm:block -bottom-40 md:-bottom-60 right-4 bg-white shadow-lg rounded-xl h-auto lg:w-[30vw] xl:w-[20vw] sm:w-[20vw] md:w-[35vw] p-4 z-20">
            <img
              src={images.testimonial}
              alt="Overlap"
              className="w-full h-40 md:h-48 lg:h-56 object-cover bg-cover rounded-xl transition-opacity duration-300"
            />
            <div className="flex flex-col gap-4 mt-5">
              <span className="font-semibold text-lg md:text-2xl">Student Testimonials</span>
              <p className="text-gray-500 text-xs md:text-sm">
                Hear directly from our students about their experiences and what makes Howard University special.
              </p>
            </div>
          </Card>
        </Card>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
          <div className="text-black">
            <div className="flex flex-col gap-2">
              <span className="uppercase font-semibold text-sm md:text-base">Alumni Achievements</span>
              <p className="text-gray-500 text-base sm:text-lg md:text-xl lg:text-4xl">
                Our graduates go on to achieve remarkable success in various fields. Read about their journeys and how Howard helped shape their future.
              </p>
            </div>
          </div>
          <div className="hidden sm:block"></div> {/* Placeholder for symmetry in the grid */}
        </div>
      </div>
    </section>
  );
}

export default SuccessStories;
