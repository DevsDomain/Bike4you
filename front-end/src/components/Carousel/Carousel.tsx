import { Swiper, SwiperSlide } from 'swiper/react';
import { register } from 'swiper/element/bundle';
import bike1 from "../../assets/bike1.png";
import bike2 from "../../assets/bike2.png";
import bike3 from "../../assets/bike3.png";
import bike4 from "../../assets/bike4.png";
import bike6 from "../../assets/bike6.png";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styles from '../../components/Carousel/Carousel.module.css';

register();

export function Carousel() {
  const data = [
    { id: 'Bike1', image: bike1 },
    { id: 'Bike2', image: bike2 },
    { id: 'Bike3', image: bike3 },
    { id: 'Bike6', image: bike6 },
    { id: 'Bike4', image: bike4 },
      // Adicione mais bicicletas conforme necessário
  ];

  return (
    <Swiper slidesPerView={3} spaceBetween={0} pagination={{ clickable: true }} navigation>
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