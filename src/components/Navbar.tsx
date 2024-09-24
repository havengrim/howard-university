import { useState, useEffect } from 'react';
import { images } from '../assets/images.ts';
import { GoSun } from 'react-icons/go';
import { HiMenu, HiX } from 'react-icons/hi';
import { gsap } from 'gsap';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false); 

    useEffect(() => {
        const menuItems = document.querySelectorAll('.nav-item');

        if (isOpen) {
            gsap.fromTo(menuItems, 
                { opacity: 0, x: -20 }, 
                { opacity: 1, x: 0, duration: 0.5, stagger: 0.1 }
            );
        }
    }, [isOpen]);

    return (
        <div className='w-full bg-white shadow-md'>
            <div className="container-padding">
                <nav className="flex justify-between items-center">
                    <div className='flex gap-2 items-center'>
                        <img src={images.logo} className='h-10' alt="Howard University Logo" />
                        <span className='font-regular text-xl'>Howard</span>
                    </div>
                 
                    <div className="flex items-center md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <HiX className='w-6 h-6' /> : <HiMenu className='w-6 h-6' />}
                        </button>
                    </div>

                    {/* Navigation Menu */}
                    <ul className={`absolute top-16 p-4 z-50 md:p-0 left-0 w-full md:w-auto items-center md:static md:flex md:gap-8 md:font-medium md:text-sm bg-white sm:bg-none ${isOpen ? 'block' : 'hidden'} md:block`}>
                        <li className='nav-item border-2 py-2 px-5 rounded-full font-medium'>Home</li>
                        <li className='nav-item py-2 px-4 md:p-0 font-medium'>Majority</li>
                        <li className='nav-item py-2 px-4 md:p-0 font-medium'>About us</li>
                        <li className='nav-item py-2 px-4 md:p-0 font-medium'>Gallery</li>
                    </ul>

                    {/* Sun Icon */}
                    <GoSun className='cursor-pointer w-10 h-5 hidden md:block' />
                </nav>
            </div>
        </div>
    );
}

export default Navbar;
