import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "next/image";
import CoozyHotel from '../../assets/images/coozy/coozy.png';
const Coozy = () => {
  const styles = {
    coozy: `coozy`,
    container: `max-w-[1240px] w-full mx-auto block px-5 pt-[80px] pb-[80px]`,
    coozy__container: `flex item-center`,
    coozy__right: `w-[690px] ml-[126px] flex justify-center flex-col`,
    coozy__button: `font-Inter mt-8 w-[121px] h-[47px] rounded bg-[#0E1734] text-base text-white transition duration-500 hover:bg-[#fff] hover:text-[#192252] border-2 border-[#192252]`,
    coozy__left: ``,
    coozy__header: `text-h2 font-Montserrat font-semibold width-[690px] text-[#192252] tracking-[-0.01em;]`,
    coozy__text: `font-Inter text-main mt-6 w-[584px] text-[#848FAC]`,
    coozy__text2: `font-Inter text-main mt-[16px] w-[584px] text-[#848FAC]`,
    coozy__bottom:`mt-[16px]`
  }
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (

    <div className={styles.coozy} data-aos='flip-up'>
      <div className={styles.container}>
        <div className={styles.coozy__container}>
          <div className={styles.coozy__left}>
            <Image
              src={CoozyHotel}
              width={384}
              height={576}
            />
          </div>
          <div className={styles.coozy__right}>
            <h2 className={styles.coozy__header}>
              Cozy and Down to Earth Cootage Hotel in Norway.
            </h2>
            <p className={styles.coozy__text}>
              Our Cootage Hotel is an intimate hideway concieved for dicerning travelers. It faces directly the unique and spectacular panorama of the Hallerbos Jungle.
            </p>
            <p className={styles.coozy__text2}>
                Cootels extends along a private, quiet, and beautiful nature. Stay away from crowd and enjoy the cozy and beauty with us.
              </p>
            <button className={styles.coozy__button}>
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Coozy