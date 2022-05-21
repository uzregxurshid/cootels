import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "next/image";
import Down from '../../assets/images/tips/ArrDown.svg';
import Up from '../../assets/images/tips/ArrUp.svg';
const Tips = () => {
  const styles = {
    tips: `tips`,
    container: `max-w-[1240px] w-full mx-auto block px-5 pt-[80px] pb-[80px]`,
    tips__container: `flex flex-row justify-between`,
    tips__left: `flex flex-col w-[407px] justify-center`,
    tips__right: `flex flex-col w-[588px] items-top`,
    tips__pretext: `font-Inter text-base text-[#424F7B]`,
    tips__header:`text-h2 mt-3 font-Montserrat font-semibold text-[#192252] tracking-[-0.01em;] text-center`,
    tips__text:`font-Inter text-main mt-6 w-[384px] text-[#848FAC] `,
    tips__button: `font-Inter w-[121px] h-[47px] rounded bg-[#0E1734] text-base text-white transition duration-500 hover:bg-[#fff] hover:text-[#192252] border-2 border-[#192252]`,
    tips__actions:`flex mt-8 flex-row items-center`,
    tips__tbutton:`ml-6 flex items-center text-base  leading-[19px] hover:opacity-75 text-[#192252] transition-opacity duration-200`,
    tips__list:``,
    tips__item: 'flex flex-col justify-center rounded py-8 mt-6 shadow px-9',
    tips__wrapper:`flex items-center justify-between`,
    tips__h3:`font-Montserrat font-semibold text-h3 text-[#424F7B]`,
    tips__more:`w-10 h-10 rounded-full bg-[#FFECE2] flex items-center justify-center hover:bg-[#FFCA8F] transition duration-500`,
    tips__less:`w-10 h-10 rounded-full bg-[#FF620A] flex items-center justify-center hover:bg-[#FF800A] transition duration-500`,
    tips__morep:`block`,
    tips__moretext:`font-Inter text-main mt-6 w-[516px] text-[#848FAC] `
  }
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className={styles.tips}>
      <div className={styles.container}>
        <div className={styles.tips__container}>
          <div className={styles.tips__left}>
            <div className={styles.tips__pretext}>
              Start your journey!
            </div>
            <h2 className={styles.tips__header}>
              How to Get My Room?
            </h2>
            <p className={styles.tips__text}>
              You can contact us by phone or email us. Easily tap the contact button below and it will take you to our contact point
            </p>
            <div className={styles.tips__actions}>
              <button className={styles.tips__button}>
                Contact us
              </button>
              <a href="/" className={styles.tips__tbutton}>
                Explore more room
              </a>
            </div>
          </div>
          <div className={styles.tips__right}>
            <ul className={styles.tips__list}>
              <li className={styles.tips__item}>
                <div className={styles.tips__wrapper}>
                  <h3 className={styles.tips__h3}>
                    1. Choose a room and date
                  </h3>
                  <button className={styles.tips__more}>
                    <Image
                      className={styles.tips__morep}
                      src={Down}
                      width={24}
                      height={24}
                    />
                  </button>
                </div>
              </li>
              <li className={styles.tips__item}>
                <div className={styles.tips__wrapper}>
                  <h3 className={styles.tips__h3}>
                    2. Check for room availability
                  </h3>
                  <button className={styles.tips__less}>
                    <Image
                      className={styles.tips__morep}
                      src={Up}
                      width={24}
                      height={24}
                    />
                  </button>
                </div>
                <p className={styles.tips__moretext}>
                  Contact us via phone or email, ask for availability of you choice of room. We might offer you something exciting.
                </p>
              </li>
              <li className={styles.tips__item}>
                <div className={styles.tips__wrapper}>
                  <h3 className={styles.tips__h3}>
                    3. Enjoy your room
                  </h3>
                  <button className={styles.tips__more}>
                    <Image
                      className={styles.tips__morep}
                      src={Down}
                      width={24}
                      height={24}
                    />
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tips