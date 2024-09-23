import { useState } from 'react';
import { images } from '../assets/images';
import { GoSun } from 'react-icons/go';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false); 

    return (
        <div className='w-full bg-white shadow-md'>
            <div className="container mx-auto px-4 py-4">
                <nav className="flex justify-between items-center">
                    <div className='flex gap-2 items-center'>
                        <img src={images.logo} className='h-10' alt="logo" />
                        <span className='font-semibold text-xl'>Howard</span>
                    </div>
                    {/* Hamburger Button for Mobile */}
                    <div className="flex items-center md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <HiX className='w-6 h-6' /> : <HiMenu className='w-6 h-6' />}
                        </button>
                    </div>

                    {/* Navigation Menu */}
                    <ul className={`absolute top-16 p-4 md:p-0 left-0 w-full md:w-auto items-center md:static md:flex md:gap-8 md:font-medium md:text-sm bg-white sm:bg-none ${isOpen ? 'block' : 'hidden'} md:block`}>
                        <li className='border-2 py-2 px-5 rounded-full font-bold'>Home</li>
                        <li className='py-2 px-4 md:p-0 font-semibold'>Majority</li>
                        <li className='py-2 px-4 md:p-0 font-semibold'>About us</li>
                        <li className='py-2 px-4 md:p-0 font-semibold'>Gallery</li>
                    </ul>

                    {/* Sun Icon */}
                    <GoSun className='cursor-pointer w-10 h-5 hidden md:block' />
                </nav>
            </div>
        </div>
    );
}

export default Navbar;
