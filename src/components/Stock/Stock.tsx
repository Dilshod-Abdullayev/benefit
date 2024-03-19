"use client"
import React, { Suspense, useState } from 'react';
import { Tabs } from '../../types/types';
// import StockSlides from './StockSlides';
import Loader from '../Loader';
import NewsClub from './NewsClub';

const tabs: Tabs[] = [
    {
        id: 1,
        text: 'Аквапарк'
    },
    {
        id: 2,
        text: 'Термы'
    },
    {
        id: 3,
        text: 'СПА'
    },
    {
        id: 4,
        text: 'Праздникик'
    },
    {
        id: 5,
        text: 'Фитнес'
    },
    {
        id: 6,
        text: 'Боулинг'
    }
]
const StockSlides = React.lazy(() => import('./StockSlides'))

const Stock = () => {
    const [active, setActive] = useState(1);

    const handleTabClick = (id: number) => {
        setActive(id);
    };

    return (
        <div style={{ backgroundColor: '#00100F' }} className='pl-4 pb-20'>
            <div className='w-full  pt-20 stock  bg-cover bg-opacity-95 py-10'>
                <h1 className='font-extrabold text-white text-5xl'>Акции</h1>
                <div className='px-4 pt-12 gap-3 flex'>
                    {tabs.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => handleTabClick(item.id)}
                            className={`p-2 text-xl px-4
                        bg-zinc-600 shadow-2xl  shadow-zinc-900 
                        rounded-2xl text-white  outline-none border-2 border-zinc-600  font-semibold 
                        ${active === item.id ? 'bg-transparent border-solid border-2 border-white' : 'hover:bg-transparent hover:border-solid hover:border-2 hover:border-white'}`}
                        >
                            {item.text}
                        </button>
                    ))}
                </div>
                <Suspense fallback={<Loader />}>
                    <StockSlides activeTabId={active} />
                </Suspense>
            </div>
            <NewsClub />
        </div>
    );
};
export default Stock;
