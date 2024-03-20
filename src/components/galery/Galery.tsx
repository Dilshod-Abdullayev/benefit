"use client"
import { galery } from '@/data/data';
import React, { useState } from 'react';

export default function Galery() {
    const [showAll, setShowAll] = useState(false);
    const toggleShowAll = () => {
        setShowAll(!showAll);
    };
    return (
        <div className='stock w-full flex flex-col items-center gap-3 px-12 py-20' style={{ backgroundColor: '#00100F' }}>
            <h1 className='font-extrabold text-white text-5xl'>Фотогалерея</h1>
            <div className='flex justify-around w-full flex-wrap gap-3'>
                {galery.map((item, index) => (
                    (!showAll && index >= 6) ? null : (
                        <img alt='photo' className='w-96 h-72' src={item.img} key={item.id} />
                    )
                ))}
            </div>
            {galery.length > 6 && (
                <button
                    onClick={toggleShowAll}
                    className='p-2 text-xl px-4 bg-zinc-600 shadow-2xl  shadow-zinc-900  rounded-2xl text-white  outline-none border-2 border-zinc-600  font-semibold '>
                    {showAll ? 'Скрыть фото' : 'Смотреть все фото'}
                </button>
            )}
        </div >
    );
}
