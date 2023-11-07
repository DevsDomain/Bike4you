import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBicycle, faCog, faUser } from "@fortawesome/free-solid-svg-icons";
import styles from './Navbar.module.css'
import { useState, useEffect } from "react";
import { useAuth } from "../../hooks/auth";
import { BiCycling } from "react-icons/bi";


function Navbar() {

  const [userName, setUser] = useState<string | null>(null)

  const { handleLogOut ,user} = useAuth()

  useEffect(() => {
    localStorage['userName'] && setUser(localStorage['userName'])
  }, [user]);


  function logout() {
    handleLogOut()
    document.location.reload()

  }
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
            <BiCycling /> Buscar Bikes
          </Link>
        </li>
        <li className={styles.item}>
          <Link to="/gerenciamento">
            <FontAwesomeIcon icon={faCog} /> Gerenciamento
          </Link>
        </li>


        {
          (userName) ? <>
            <li className={styles.item}>
              <Link to="/" onClick={logout}><FontAwesomeIcon icon={faUser} />  Logout</Link>
            </li>


            <li className={styles.item}>
              Olá,<strong>{userName}</strong>
            </li>

          </>


            : <Link to="/login"><FontAwesomeIcon icon={faUser} />  Login</Link>


        }
        
      </ul>
    </div>
  );
}

export default Navbar;







