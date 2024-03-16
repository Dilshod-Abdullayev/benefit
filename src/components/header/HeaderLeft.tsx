import React from 'react'

export default function () {
    return (
        <div className='w-2/3 flex flex-col px-12 h-96 py-4 headerleft' >
            <h1 className='text-white w-1/2 leading-relaxed text-4xl font-extrabold h-auto'>Создай тело мечты вместе <br /> <span className='text-teal-500'>с Moreon Fitness</span> </h1>
            <div className='flex flex-col gap-3'>
                <h2 className='text-lg text-white border-l-2 border-teal-600 font-normal border-l-teal-500 pl-3'>  Гибкая клубная карта</h2>
                <h2 className='text-lg text-white border-l-2 border-teal-600 font-normal border-l-teal-500 pl-3'>Персональные тренировки</h2>
                <h2 className='text-lg text-white border-l-2 border-teal-600 font-normal border-l-teal-500 pl-3'>Все самые продвинутые программы 2022 года</h2>
            </div>
            <div className='mt-12 flex gap-8'>
                <button className='p-2 text-xl px-4 bg-teal-400 shadow-2xl shadow-teal-200 rounded-2xl text-white border-none outline-none font-semibold'>Узнать подробнее</button>
                <button className='p-2 text-xl px-4 bg-zinc-600 shadow-2xl shadow-zinc-900 rounded-2xl text-white border-none outline-none font-semibold'>Рассчитать стоимость</button>
            </div>
        </div >
    )
}
