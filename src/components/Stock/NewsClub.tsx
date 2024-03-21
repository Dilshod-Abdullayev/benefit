import React from 'react'
import img from '../../images/newsclub1.jpg'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '@/styles/stock.css'
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
export default function NewsClub() {
    return (
        <div className='mt-16 select-none '>
            <h1 className='text-2xl font-extrabold text-white'><span className='text-teal-700'>Новости</span> фитнес клуба</h1>
            <div className='flex w-full mt-12 justify-center items-center gap-7'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination]}
                    className="w-4/5 items-center "
                >
                    <div>
                        <SwiperSlide>
                            <div className='w-full text-slate-300 flex flex-col gap-4 font-medium'>
                                <Image className='rounded-xl h-64' alt='photo' src={img} />
                                <h1>Приглашаем вас на презентацию новой студии «Body Art»</h1>
                                <h1 className='text-slate-400'>Body Art – сочетание физической тренировки и дыхательных практик.</h1>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='w-full text-slate-300 flex flex-col gap-4 font-medium'>
                                <Image className='rounded-xl h-64' alt='photo' src={img} />
                                <h1>Приглашаем вас на презентацию новой студии «Body Art»</h1>
                                <h1 className='text-slate-400'>Body Art – сочетание физической тренировки и дыхательных практик.</h1>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='w-full text-slate-300 flex flex-col gap-4 font-medium'>
                                <Image className='rounded-xl h-64' alt='photo' src={img} />
                                <h1>Приглашаем вас на презентацию новой студии «Body Art»</h1>
                                <h1 className='text-slate-400'>Body Art – сочетание физической тренировки и дыхательных практик.</h1>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='w-full text-slate-300 flex flex-col gap-4 font-medium'>
                                <Image className='rounded-xl h-64' alt='photo' src={img} />
                                <h1>Приглашаем вас на презентацию новой студии «Body Art»</h1>
                                <h1 className='text-slate-400'>Body Art – сочетание физической тренировки и дыхательных практик.</h1>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='w-full text-slate-300 flex flex-col gap-4 font-medium'>
                                <Image className='rounded-xl h-64' alt='photo' src={img} />
                                <h1>Приглашаем вас на презентацию новой студии «Body Art»</h1>
                                <h1 className='text-slate-400'>Body Art – сочетание физической тренировки и дыхательных практик.</h1>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='w-full text-slate-300 flex flex-col gap-4 font-medium'>
                                <Image className='rounded-xl h-64' alt='photo' src={img} />
                                <h1>Приглашаем вас на презентацию новой студии «Body Art»</h1>
                                <h1 className='text-slate-400'>Body Art – сочетание физической тренировки и дыхательных практик.</h1>
                            </div>
                        </SwiperSlide>
                    </div>
                </Swiper>
            </div>
        </div >
    )
}