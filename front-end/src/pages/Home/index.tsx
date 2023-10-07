import styles from '../Home/Home.module.css'
import Bike4you from '../../assets/bike4you_home.jpg'
function Home() {
  return (
    <div className={styles.home_container}>
      <h1>
        Bem-vindo ao <span>Bike4You</span>
      </h1>
      <p>Alugue agora mesmo a sua bicicleta!</p>
      <img src={Bike4you} alt="bike4you" />
    </div>
  );
}

export default Home;