import { Swiper, SwiperSlide } from 'swiper/react'
import { register } from 'swiper/element/bundle'
import bike1 from "../../assets/bike1.jpg"
import bike2 from "../../assets/bike2.jpg"
import bike3 from "../../assets/bike3.jpg"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styles from '../../pages/Home/Home.module.css'


register();

export function Carousel() {
    
    
    const data = [
        { id: 'Bike1', image: bike1 },
        { id: 'Bike2', image: bike2 },
        { id: 'Bike3', image: bike3 },
    ];
    
    return (
               <Swiper
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation
        >
            {data.map((item) => (

                <SwiperSlide key={item.id}>
                    <img 
                        src={item.image}
                        alt="Slider"  
                        className={styles.img} 
                        
                    />
                </SwiperSlide>
            ))}
        </Swiper>
  

    );
}
