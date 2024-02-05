import styles from "./section.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import imagem1 from "../../img/image1.png";
import imagem2 from "../../img/image2.png";
import imagem3 from "../../img/image3.png";
import imagem4 from "../../img/image4.png";
import imagem5 from "../../img/image5.png";
import imagem6 from "../../img/image6.png";
import imagem7 from "../../img/imagem7.png";

const Section2 = () => {
  return (
    <div className={styles.section2_wrapper}>
      <div className={styles.section2_container}>
        <h2 className={styles.section2_titulo}>OS MAIS VENDIDOS</h2>
      </div>
      <Swiper
        breakpoints={{
          // when window width is >= 640px
          600: {
            width: 600,
            slidesPerView: 2,
          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 2,
          },
          1920: {
            width: 1920,
            slidesPerView: 6,
          },
        }}
        slidesPerView={6}
        loop={true}
        modules={[Pagination, Navigation]}
        navigation
        className={styles.mySwiper}
      >
        <SwiperSlide>
          <div className={styles.slider}>
            <a href="https://kfcbrasil.com.br/pt/menu/balde_8_variados_original_9271.html">
              <img
                className={styles.section_img}
                src={imagem1}
                alt="imagem1"
              ></img>
            </a>
            <p className={styles.section_p}>BALDE DE FRANGO APIMENTADO</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slider}>
            <a href="https://kfcbrasil.com.br/pt/menu/big_box_double_crunch_bbq_e383.html">
              <img
                className={styles.section_img}
                src={imagem2}
                alt="imagem2"
              ></img>
            </a>
            <p className={styles.section_p}>COMBO COMPLETO</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slider}>
            <a href="https://kfcbrasil.com.br/pt/menu/balde_12_variados_original_1031.html">
              <img
                className={styles.section_img}
                src={imagem3}
                alt="imagem3"
              ></img>
            </a>
            <p className={styles.section_p}>BALDE DE FRANGO</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slider}>
            <a href="https://kfcbrasil.com.br/pt/menu/combo_sanduiche_double_crunch_bbq_3f71.html">
              <img
                className={styles.section_img}
                src={imagem4}
                alt="imagem4"
              ></img>
            </a>
            <p className={styles.section_p}>COMBO BBQ</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slider}>
            <a href="https://kfcbrasil.com.br/pt/menu/balde_8_variados_crocante_ccce.html">
              <img
                className={styles.section_img}
                src={imagem5}
                alt="imagem5"
              ></img>
            </a>
            <p className={styles.section_p}>BALDE VARIADOS</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slider}>
            <a href="https://kfcbrasil.com.br/pt/menu/mini_balde_5_tirinhas_crocante_debe.html">
              <img
                className={styles.section_img}
                src={imagem6}
                alt="imagem6"
              ></img>
            </a>
            <p className={styles.section_p}>4 HAMBURGUERES</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slider}>
            <a href="https://kfcbrasil.com.br/pt/menu/balde_7_pedacos_original_6695.html">
              <img
                className={styles.section_img}
                src={imagem7}
                alt="imagem7"
              ></img>
            </a>
            <p className={styles.section_p}>BALDE 7 PEDAÇOS ORIGINAIS</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default Section2;
