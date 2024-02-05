import styles from "./hero.module.css";
import Imagem1 from "../../img/foto.1.png";
import Imagem2 from "../../img/foto.2.png";
import Imagem3 from "../../img/foto.3.png";
import Imagem5 from "../../img/foto.4.png";

const Hero = () => {
  return (
    <section className={styles.principal}>
      <div className={styles.hero_title}>
        <h2 className={styles.hero_h2}>PROMOÇÕES</h2>
      </div>
      <div className={styles.hero_wrapper}>
        <div className={styles.hero_container}>
          <div className={styles.hero_content}>
            <img className={styles.hero_img} src={Imagem1} alt="Imagem1" />
            <h1 id={styles.textkfc} className={styles.texto1}>
              KFC apresenta Double Crunch Cheese Lovers em edição limitada
            </h1>
            <p className={styles.hero_p}>
              A novidade está disponível pelo preço sugerido de R$26,90
            </p>
            <div className={styles.hero_btndiv}>
              <a
                className={styles.botao}
                href="https://kfcbrasil.com.br/pt/menu/sanduiche_double_crunch_bbq_c3a3.html"
              >
                COMPRE AGORA
              </a>
            </div>
          </div>
          <div className={styles.hero_content}>
            <img className={styles.hero_img} src={Imagem2} alt="Imagem2" />
            <h1 className={styles.texto1}>FRANGO POR FRANGO</h1>
            <p className={styles.hero_p}>
              A cada frango do goleirão, voce recebe um frango de verdade de
              graça!
            </p>
            <div className={styles.hero_btndiv}>
              <a
                className={styles.botao}
                href="https://kfcbrasil.com.br/pt/menu/balde_14_tirinhas_crocante_f04c.html"
              >
                COMPRE AGORA
              </a>
            </div>
          </div>
        </div>
        <div className={styles.hero_container}>
          <div className={styles.hero_content}>
            <img className={styles.hero_img} src={Imagem3} alt="Imagem3" />
            <h1 className={styles.texto1}>KFC x NFL</h1>
            <p className={styles.hero_p}>Acompanhe a NFL com o KFC!</p>
            <div className={styles.hero_btndiv}>
              <a
                className={styles.botao}
                href="https://kfcbrasil.com.br/pt/menu/balde_10_pedacos_crocante_cb7b.html"
              >
                COMPRE AGORA
              </a>
            </div>
          </div>
          <div className={styles.hero_content}>
            <img className={styles.hero_img} src={Imagem5} alt="Imagem5" />
            <h1 className={styles.texto1}>KFC apresenta 2 POR 1</h1>
            <p className={styles.hero_p}>
              Pelo preço adicional de R$ 35,90, voce pode levar o mesmo combo de
              graça!
            </p>
            <div className={styles.hero_btndiv}>
              <a
                className={styles.botao}
                href="https://kfcbrasil.com.br/pt/menu/2_sanduiches___mini_balde___2_molhos___2_refri_lata_82eb.html"
              >
                COMPRE AGORA
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
