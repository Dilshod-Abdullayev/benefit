import React from 'react'
import img from '../../images/header.png'
export default function NewsClub() {
    return (
        <div className='mt-10'>
            <h1 className='text-2xl font-extrabold text-white'><span className='text-teal-700'>Новости</span> фитнес клуба</h1>
            <div className='flex flex-col'>
                <img src={img} />
                <h1>Приглашаем вас на презентацию новой студии «Body Art»</h1>
                <h1>Body Art – сочетание физической тренировки и дыхательных практик.</h1>
            </div>
        </div>
    )
}