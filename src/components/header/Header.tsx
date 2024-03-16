import React from 'react'
import HeaderLeft from './HeaderLeft'
import HeaderBoxs from './HeaderBoxs'
export default function Header() {
    return (
        <div className='flex w-full py-10 justify-between' style={{ backgroundImage: `url('https://img.freepik.com/premium-photo/portrait-bengal-cat-suppuration-eye-conjunctivitis-medication-concept-mixed-media_392761-3400.jpg?w=826')`, backgroundSize: '100%', backgroundRepeat: 'no-repeat' }} >
            <HeaderLeft />
            <HeaderBoxs />
        </div>
    )
}