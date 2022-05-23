import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "next/image";
import House from '../../assets/images/intro/house.png';
const Intro = () => {
  const styles = {
    intro: `intro`,
    container: `max-w-[1240px] w-full mx-auto block px-5 pt-[80px] pb-[80px]`,
    intro__container: `flex item-center justify-between`,
    intro__button: `font-Inter mt-8 w-[121px] h-[47px] rounded bg-[#0E1734] text-base text-white transition duration-500 hover:bg-[#fff] hover:text-[#192252] border-2 border-[#192252]`,
    intro__left: `w-[587px] flex justify-center flex-col`,
    intro__header: `font-Montserrat font-semibold text-5xl text-[#192252] leading-[4.5rem]`,
    intro__text: `font-Inter text-main mt-6 w-[485px] text-[#848FAC]`,
    intro__right: `ml-6  flex items-center justify-center`,
  }
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (

    <div className={styles.intro} data-aos='zoom-in'>
      <div className={styles.container}>
        <div className={styles.intro__container}>
          <div className={styles.intro__left} data-aos="fade-right">
            <h1 className={styles.intro__header}>
              Nature, Warmth, and Beauty in One Space
            </h1>
            <p className={styles.intro__text}>
              One place to release all the stress, bring back happines, and get back to nature. We provide the best room and nature for you. Come visit us anytime you want.
            </p>
            <button className={styles.intro__button}>
              Reservation
            </button>
          </div>
          <div className={styles.intro__right}>
            <Image
              data-aos="fade-left"
              src={House}
              width={600}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro