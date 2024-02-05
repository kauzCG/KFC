import styles from "./footer.module.css";
import Logo from "../../img/logo.1.png";
import Rede1 from "../../img/rede1.png";
import Rede2 from "../../img/rede2.png";
import Rede3 from "../../img/rede3.png";

const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.footer_container}>
          <img src={Logo} alt="Logo" />
          <h2 className={styles.footer_p}>
            Descubra a autenticidade do KFC, onde cada mordida é uma celebração.
            Desde 1930, nossa receita secreta de 11 ervas e especiarias
            transforma o frango frito em uma experiência única. Conecte-se,
            encontre o restaurante mais próximo e explore nosso menu
            diversificado. Comprometidos com qualidade, oferecemos ingredientes
            frescos em cada refeição. Obrigado por escolher KFC, onde criamos
            momentos de alegria. Bom apetite!
          </h2>
          <div className={styles.social}>
          <a href="https://www.instagram.com/kfcbrasil/">
            <img src={Rede1} alt="Rede1" />
            </a>
            <a href="https://pt-br.facebook.com/KFCBrasil/">
            <img src={Rede2} alt="Rede2" />
            </a>
            <a href="https://twitter.com/KFCBrasil">
            <img src={Rede3} alt="Rede3" />
            </a>
          </div>
        </div>
        <ul className={styles.footer_ul}>
                  <div>
                    <h3 className={styles.footer_title}><a href="#" className={styles.footer_h3}>ATENDIMENTO AO CLIENTE</a></h3>
                    <li><a href="https://kfcbrasil.com.br/pt/contact-us.html" className={styles.footer_a}>Fale Conosco</a></li>
                    <li><a href="https://kfcbrasil.com.br/pt/store-locator.html" className={styles.footer_a}>KFC Mais Proximo</a></li>
                    </div>

                    <div>
                    <h3 className={styles.footer_title}><a className={styles.footer_h3} href="#">SOBRE NOS</a></h3>
                    <li><a href="https://kfcbrasil.com.br/pt/nossa-historia-.html" className={styles.footer_a}>Nossa Historia</a></li>
                    <li><a href="https://franquiakfc.com.br/" className={styles.footer_a}>Seja Um Franqueado</a></li>
                    </div>

                    <div>
                      <h3 className={styles.footer_title}><a className={styles.footer_h3} href="#">POLITICA DE PRIVACIDADE</a></h3>
                      <li><a href="https://kfcbrasil.com.br/pt/termos_de_uso.html" className={styles.footer_a}>Política de privacidade</a></li>
                    </div>
                </ul>
      </div>
      <div className={styles.footer_copy}>
        <div className={styles.footer_copycontainer}>
          <h4 className={styles.nome3}>© KFC Brasil 2024</h4>
          <h4>EMAIL: XXXXXXXXXXXXXX</h4>
          <h4>SAC: XXXX-XXXXX</h4>
        </div>
      </div>
    </section>
  )
};

export default Footer;
