import React from 'react'
import HeaderLeft from './HeaderLeft'
import HeaderBoxs from './HeaderBoxs'
export default function Header() {
    return (
        <div className='flex w-full max-md:h-96  bg-red-500  py-10 max-lg:py-3 justify-around px-5 flex-wrap' style={{ backgroundImage: `url('https://img.freepik.com/premium-photo/portrait-bengal-cat-suppuration-eye-conjunctivitis-medication-concept-mixed-media_392761-3400.jpg?w=826')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} >
            <HeaderLeft />
            <HeaderBoxs />
        </div>
    )
}