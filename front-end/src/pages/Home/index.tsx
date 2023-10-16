import { register } from 'swiper/element/bundle'
import styles from '../Home/Home.module.css'
import bike4you from "../../assets/bike4you_home.jpg"
import kode from "../../assets/Img_Marca_kode.jpg"
import { Carousel } from '../../components/Carousel/Carousel'
import { Card } from '../../components/Card/Card'

register();

export default function Home() {
  return (

    <>
   
      <div className={styles.home_container}>
        <img src={bike4you} alt="bike4you"></img>
        <h1> Plataforma <span>Peer-to-Peer</span>
        </h1>
        <p>O Bike 4 You é uma revolucionária plataforma de aluguel de bicicletas que une apaixonados por ciclismo e entusiastas de aventuras ao ar livre. Nossa comunidade conecta locatários em busca de uma experiência de pedal incrível a locadores que desejam compartilhar suas bicicletas de qualidade com outros entusiastas.
        </p>
      </div>

      <div className={styles.home_carousel}>
        <div>
          <img src={kode} alt="kode"></img>
        </div>
        <div>
          <Carousel />
        </div>
        <div>
          <Card />
        </div>
      

    </div>
     
    </>
  );
}