import React from 'react'
import { FaTelegramPlane, FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

export default function NavTop() {
    return (
        <div className='flex justify-end max-lg:justify-center gap-x-2 bg-emerald-950 p-3 text-white items-center font-bold'>
            <h1 className='flex items-center gap-2'><FaPhone /> +7 (495) 859-03-72  </h1>
            <div className='ml-4 flex gap-5 text-2xl '>
                <FaTelegramPlane />
                <FaInstagram />
                <FaFacebookF />
                <FaYoutube />
            </div>
        </div>
    )
}
