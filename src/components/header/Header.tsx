import React from 'react'
import HeaderLeft from './HeaderLeft'
import HeaderBoxs from './HeaderBoxs'
import bg from '../../images/Bg.png'
export default function Header() {
    return (
        <div className={`flex w-full h-96 justify-between p-4`} style={{backgroundImage: `url(${bg})`}}>
            <HeaderLeft />
            <HeaderBoxs />
        </div>
    )
}
