import React from 'react'

export default function () {
    return (
        <div className="w-3/4 flex flex-col px-12 h-96 max-lg:h-auto max-sm:py-0 max-sm:px-3 py-4 max-lg:py-1 headerleft max-w-full max-lg:w-full" >
            <h1 className='text-white w-1/2 max-sm:text-lg max-sm:w-full max-lg:w-full leading-relaxed text-4xl font-extrabold h-auto max-lg:text-2xl'>Создай тело мечты вместе <br /> <span className='text-teal-500'>с Moreon Fitness</span> </h1>
            <div className='flex flex-col gap-3 max-sm:gap-0'>
                <h2 className='text-lg max-sm:border-b-2 max-sm:pl-1 text-white border-l-2 border-teal-600 font-normal border-l-teal-500 pl-3'>  Гибкая клубная карта</h2>
                <h2 className='text-lg max-sm:border-b-2 max-sm:pl-1 text-white border-l-2 border-teal-600 font-normal border-l-teal-500 pl-3'>Персональные тренировки</h2>
                <h2 className='text-lg max-sm:border-b-2 max-sm:pl-1 text-white border-l-2 border-teal-600 font-normal border-l-teal-500 pl-3'>Все самые продвинутые программы 2022 года</h2>
            </div>
            <div className='mt-12 flex gap-8 max-lg:mt-4'>
                <button className='p-2 max-sm:px-2 max-sm:text-xs max-md:text-base text-xl px-4 bg-teal-400 shadow-2xl shadow-teal-200 rounded-2xl text-white border-none outline-none font-semibold'>Узнать подробнее</button>
                <button className='p-2 max-sm:px-2 max-sm:text-xs max-md:text-base text-xl px-4 bg-zinc-600 shadow-2xl shadow-zinc-900 rounded-2xl text-white border-none outline-none font-semibold'>Рассчитать стоимость</button>
            </div>
        </div >
    )
}
