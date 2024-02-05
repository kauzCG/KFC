import styles from "./header.module.css";
import { useState } from "react";
import Logo from "../../img/Logo_KFC.png";
import IconCloser from "../../img/menu-closer.svg";
import IconsBars from "../../img/menu-togle.svg";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  const links = [
    { name: "Cardapio", link: "https://kfcbrasil.com.br/pt/menu.html" },
    { name: "KFC mais proximo", link: "https://kfcbrasil.com.br/pt/store-locator.html" },
    { name: "Ofertas", link: "https://kfcbrasil.com.br/pt/deals.html" },
    { name: "Delivery", link: "https://kfcbrasil.com.br/pt/store-locator.html" },
  ];

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };
  return (
    <header
      id={styles.Menu}
      className={`${styles.header} ${menuActive ? styles.active : ""}`}
    >
      <div className={styles.header_wrapper}>
        <div>
          <button className={styles.LogoButton}>
            <img src={Logo} alt="Logo menu" />
          </button>
        </div>
        <button id={styles.buttonMobile} onClick={toggleMenu}>
          <img
            id={styles.Icons}
            src={menuActive ? IconCloser : IconsBars}
            alt="Icone Menu"
          />
        </button>
        <nav className={menuActive ? styles.active : ""}>
          <ul id={styles.header_lista} className={styles.ul_wrapper}>
            {links.map((link, index) => (
              <li className={styles.header_li} key={link.name}>
                <a className={styles.navLink} href={link.link} key={index}>
                  {link.name}
                </a>
              </li>
            ))}

            <li className={styles.header_li}>
              <a href="https://kfcbrasil.com.br/pt/menu.html" className={styles.btn_login}>
                PEÇA JÁ
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
