"use client"
import React, { useState, useRef, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Nav } from '@/data/data';
import logo from '../../images/logo.png';
import Image from 'next/image';

const NavItems: React.FC = () => {
    const [navOpen, setNavOpen] = useState<boolean>(false);
    const navRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (navRef.current && !navRef.current.contains(event.target as Node)) {
                setNavOpen(false);
            }
        };

        if (navOpen) {
            window.addEventListener('click', handleClickOutside);
        }

        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, [navOpen]);

    const toggleNav = () => {
        setNavOpen(!navOpen);
    };

    const handleButtonClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.stopPropagation(); // Prevent click event propagation to window
        toggleNav();
    };

    return (
        <div className='bg-zinc-950 p-4'>
            <div className='container mx-auto flex justify-between items-center' ref={navRef}>
                <Image alt='photo' src={logo} />
                <ul className='hidden lg:flex justify-around w-9/12'>
                    {Nav.map((item) => (
                        <li className='text-white cursor-pointer select-none hover:text-slate-400 transition duration-150' key={item.id}>{item.text}</li>
                    ))}
                </ul>
                <div onClick={handleButtonClick} className='block lg:hidden'>
                    {navOpen ? <AiOutlineClose className="text-white" size={20} /> : <AiOutlineMenu className="text-white" size={20} />}
                </div>
            </div>
            <ul
                className={
                    navOpen
                        ? 'fixed lg:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
                        : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
                }
            >
                <div className='flex flex-col items-center'>
                    <Image className='w-64 border-b-4 p-4 mb-12 ' alt='photo' src={logo} />
                    {Nav.map((item) => (
                        <li className='text-white text-left w-full mt-2 cursor-pointer select-none max-lg:text-3xl hover:text-slate-400 transition duration-150' key={item.id}>{item.text}</li>
                    ))}
                </div>
            </ul>
        </div>
    );
}

export default NavItems;
