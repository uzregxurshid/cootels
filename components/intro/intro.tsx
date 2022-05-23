import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "next/image";
import House from '../../assets/images/intro/house.png';
const Intro = () => {
  const styles = {
    intro: `intro`,
    container: `
    ffz:py-12 md:py-[80px] max-w-[1240px] w-full mx-auto block px-5`,
    intro__container: `flex item-center justify-between`,
    intro__button: `mt-5
    ffz:mt-5 sm:mt-4 md:mt-4 efz:mt-4 lg:mt-8 font-Inter w-[121px] h-[47px] rounded bg-[#0E1734] text-base text-white transition duration-500 hover:bg-[#fff] hover:text-[#192252] border-2 border-[#192252]`,
    intro__left: `
    items-center w-full md:w-[320px] efz:w-[350px] lg:w-[400px]  otfz:w-[587px] flex justify-center flex-col`,
    intro__header: `text-3xl
    ffz:text-4xl text-center sm:text-4xl sm:leading-[3rem] sm:w-[500px] md:text-2xl efz:text-3xl lg:text-4xl font-Montserrat font-semibold text-[#192252] otfz:text-5xl otfz:leading-[4.5rem]`,
    intro__text: `text-center px-3 mt-[-10px]
    ffz:px-7 sm:w-[450px] md:text-base efz:w-[330px] md:mt-4 lg:text-base lg:w-[380px] lg:mt-5 font-Inter text-[#848FAC] otfz:mt-6 otfz:text-main  otfz:w-[485px] `,
    intro__himage:`block mt-6
    ffz:mt-4 sm:mt-4 sm:w-[350px] md:hidden`,
    intro__image: `
    md:w-[400px] efz:w-[450px] lg:w-[500px]`,
    intro__right: `hidden md:flex ml-6 items-center justify-center`,
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
            <div className={styles.intro__himage}>
              <Image
                data-aos="fade-left"
                src={House}
                width={600}
              />
            </div>
            <p className={styles.intro__text}>
              One place to release all the stress, bring back happines, and get back to nature. We provide the best room and nature for you. Come visit us anytime you want.
            </p>
            <button className={styles.intro__button}>
              Reservation
            </button>
          </div>
          <div className={styles.intro__right}>
            <div className={styles.intro__image}>
              <Image
                data-aos="fade-left"
                src={House}
                width={600}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro