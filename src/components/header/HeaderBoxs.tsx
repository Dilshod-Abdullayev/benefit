import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import '@/styles/stock.css';
export default function HeaderBoxs() {
    return (
        <div className='flex w-52 max-lg:w-full  max-lg:h-auto max-sm:flex-wrap max-sm:items-center  flex-col gap-6 px-12 max-lg:flex-row max-lg:px-2 h-96  py-4 max-lg:justify-between'>
            <div className='w-44 max-sm:w-36 max-sm:text-sm max-sm:h-20 max-sm:pt-1 hover:bg-slate-700 transition-all cursor-pointer h-24 text-center bg-slate-500 bg-opacity-80 font-extrabold rounded-xl flex flex-col items-center pt-5 text-white'>
                <h1>500 000 м2</h1>
                <p>Площадь зала</p>
            </div>
            <div className='w-44 max-sm:w-36 max-sm:text-sm max-sm:h-20 max-sm:pt-1 hover:bg-slate-700 transition-all cursor-pointer h-24 text-center bg-slate-500 bg-opacity-80 font-extrabold rounded-xl flex flex-col items-center pt-5 text-white'>
                <h1>100 500</h1>
                <p>Тренажеров VIP уровня</p>
            </div>
            <div className='w-44 max-sm:w-36 max-sm:text-sm max-sm:h-20 max-sm:pt-1 hover:bg-slate-700 transition-all cursor-pointer h-24 text-center bg-slate-500 bg-opacity-80 font-extrabold rounded-xl flex flex-col items-center pt-5 text-white'>
                <p>Бассейны
                    и
                    СПА центр</p>
            </div>  
        </div>
    )
}
