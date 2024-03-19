import React from 'react';
import { StockImages } from '@/data/data';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import '@/styles/stock.css';
interface StockSlidesProps {
    activeTabId: number;
}

const StockSlides: React.FC<StockSlidesProps> = ({ activeTabId }) => {
    return (
        <div className='mt-12'>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{ clickable: true }}
                breakpoints={{
                    '@0.00': { slidesPerView: 1, spaceBetween: 10 },
                    '@0.75': { slidesPerView: 2, spaceBetween: 20 },
                    '@1.00': { slidesPerView: 3, spaceBetween: 40 },
                    '@1.50': { slidesPerView: 4, spaceBetween: 50 },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {StockImages[activeTabId - 1].map(item => (
                    <SwiperSlide key={item.id}>
                        <img className="w-96 rounded-3xl h-80" src={item.img} alt={`Stock ${item.id}`} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
export default StockSlides;