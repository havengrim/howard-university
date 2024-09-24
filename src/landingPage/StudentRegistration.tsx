

const StudentRegistration = () => {
  return (
    <div className="sm:py-20 py-10 w-full container-padding">
        <section className="flex flex-col  overflow-hidden  rounded-lg shadow-lg dark:bg-gray-800 md:flex-row md:h-48">
        <div className="md:flex md:items-center md:justify-center md:w-1/2 md:bg-gray-700 md:dark:bg-gray-800">
            <div className="px-6 py-6 md:px-8 md:py-0">
            <h2 className="text-lg font-bold text-gray-700 dark:text-white md:text-gray-100">
            Enroll Now for <span className="text-blue-600 dark:text-blue-400 md:text-blue-300">Our Latest Programs</span>
            </h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 md:text-gray-400">
            Stay ahead by joining our latest programs and courses. Sign up today and take the first step toward your success!
            </p>
            </div>
        </div>

        <div className="flex items-center justify-center p-6 sm:w-1/2 w-full">
            <form className="w-full">
                <div className="flex w-full flex-col p-1.5 overflow-hidden border rounded-lg dark:border-gray-600 lg:flex-row dark:focus-within:border-blue-300 focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
                <input
                    className="flex-grow px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none dark:bg-gray-800 dark:placeholder-gray-400 focus:placeholder-transparent dark:focus:placeholder-transparent"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    aria-label="Enter your email"
                    required
                />
                <button className="px-6 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">
                    Subscribe
                </button>
                </div>
            </form>
            </div>
        </section>
    </div>
  );
};

export default StudentRegistration;
