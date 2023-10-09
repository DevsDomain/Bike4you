import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBicycle, faCog, faUser } from "@fortawesome/free-solid-svg-icons";
import styles from './Navbar.module.css'

function Navbar() {
  return (
    <div className={styles.navbar}>  
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link to="/">
            <FontAwesomeIcon icon={faHome} /> Home
          </Link>
        </li>
        <li className={styles.item}>
          <Link to="/bikes">
            <FontAwesomeIcon icon={faBicycle} /> Bikes
          </Link>
        </li>
        <li className={styles.item}>
          <Link to="/gerenciamento">
            <FontAwesomeIcon icon={faCog} /> Gerenciamento
          </Link>
        </li>
        <li className={styles.item}>
          <Link to="/login">
            <FontAwesomeIcon icon={faUser} /> Login
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;







