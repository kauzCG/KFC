import styles from "./section.module.css";
import banner1 from "../../img/banner1.jpeg";
import banner2 from "../../img/banner2.jpeg";
import banner3 from "../../img/banner3.jpeg";
import banner1_mobile from "../../img/banner1_mobile.jpeg";
import banner2_mobile from "../../img/banner2_mobile.jpeg";
import banner3_mobile from "../../img/banner3_mobile.jpeg";
import { Swiper, SwiperSlide} from "swiper/react";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Section = () => {
  return (
    <div className={styles.section_wrapper}>
      <Swiper 
      slidesPerView={1} 
      modules={[Autoplay, Pagination, Navigation]}
      autoplay={true}
      >
        <SwiperSlide>
          <figure>
          <picture>
            <source media='(max-width: 600px)' srcSet={banner1_mobile}></source>
            <a href="https://kfcbrasil.com.br/pt/menu/combo_sanduiche_kentucky_bbo_2f96.html"></a>
          <img className={styles.section_img} src={banner1} alt="banner1"></img>
          </picture>
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure>
            <picture>
            <source media='(max-width: 600px)' srcSet={banner2_mobile}></source>
            <a href="https://kfcbrasil.com.br/pt/menu/3_por_1___refrigerante_9d75.html"></a>
          <img className={styles.section_img} src={banner2} alt="banner2"></img>
          </picture>
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure>
            <picture>
            <source media='(max-width: 600px)' srcSet={banner3_mobile}></source>
            <a href="https://kfcbrasil.com.br/pt/menu/balde___3_sanduiches___2_molhos_cc25.html"></a>
          <img className={styles.section_img} src={banner3} alt="banner3"></img>
          </picture>
          </figure>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default Section;
