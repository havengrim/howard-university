import { FaRedditAlien, FaFacebook, FaGithub } from "react-icons/fa";
import { images } from "../assets/images.ts";

const Footer = () => {
  return (
    <footer className="bg-gray-700 dark:bg-gray-900">
      <div className="container p-6 mx-auto">
        <div className="lg:flex">
          <div className="w-full -mx-6 lg:w-2/5">
            <div className="px-6">
              <a href="#" className="flex items-center gap-2">
                <img
                  className="w-auto h-7"
                  src={images.logoWhite}
                  alt="Meraki UI Logo"
                />
                <p className="text-white font-semibold">Howard</p>
              </a>

              <p className="max-w-sm mt-2 text-white dark:text-gray-400">
                Join 31,000+ others and never miss out on new tips, tutorials, and more.
              </p>

              <div className="flex mt-6 -mx-2">
                <a
                  href="#"
                  className="mx-2 text-white transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                  aria-label="Reddit"
                >
                  <FaRedditAlien className="w-5 h-5" />
                </a>

                <a
                  href="#"
                  className="mx-2 text-white transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                  aria-label="Facebook"
                >
                  <FaFacebook className="w-5 h-5" />
                </a>

                <a
                  href="#"
                  className="mx-2 text-white transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                  aria-label="Github"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-6 lg:mt-0 lg:flex-1">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
              <div>
                <h3 className="text-white uppercase dark:text-white">About</h3>
                <a href="#" className="block mt-2 text-sm text-white dark:text-gray-400 hover:underline">
                  Company
                </a>
                <a href="#" className="block mt-2 text-sm text-white dark:text-gray-400 hover:underline">
                  Community
                </a>
                <a href="#" className="block mt-2 text-sm text-white dark:text-gray-400 hover:underline">
                  Careers
                </a>
              </div>

              <div>
                <h3 className="text-white uppercase dark:text-white">Blog</h3>
                <a href="#" className="block mt-2 text-sm text-white dark:text-gray-400 hover:underline">
                  Recent Posts
                </a>
                <a href="#" className="block mt-2 text-sm text-white dark:text-gray-400 hover:underline">
                  Popular Posts
                </a>
                <a href="#" className="block mt-2 text-sm text-white dark:text-gray-400 hover:underline">
                  Topics
                </a>
              </div>

              <div>
                <h3 className="text-white uppercase dark:text-white">Resources</h3>
                <a href="#" className="block mt-2 text-sm text-white dark:text-gray-400 hover:underline">
                  Docs
                </a>
                <a href="#" className="block mt-2 text-sm text-white dark:text-gray-400 hover:underline">
                  FAQ
                </a>
                <a href="#" className="block mt-2 text-sm text-white dark:text-gray-400 hover:underline">
                  Support
                </a>
              </div>
            </div>
          </div>
        </div>

        <hr className="h-px my-6 bg-gray-300 border-none dark:bg-gray-700" />

        <div>
          <p className="text-center text-white dark:text-white">
            © 2024 Status UI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
