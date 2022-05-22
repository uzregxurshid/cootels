import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "next/image";
import FooterLogo from '../../assets/images/footer/Cootels.svg';
import Instagram from '../../assets/images/footer/instagram-logo.svg';
import Facebook from '../../assets/images/footer/facebook.svg';
import Twitter from '../../assets/images/footer/twitter.svg';
const Footer = () => {
  const styles = {
    footer: `footer bg-[#0B265A]`,
    container: `max-w-[1240px] w-full mx-auto block px-5 pt-[120px] pb-[120px]`,
    footer__container:`flex justify-between`,
    footer__list:`flex`,
    footer__left:`flex flex-col items-start`,
    footer__logo:`block`,
    footer__link:`cursor-pointer no-underline`,
    footer__text:`text-base leading-7 mt-3 font-Inter text-[#D9DBDE] w-[186px] capitalize`,
    footer__sociallist:`flex mt-9`,
    footer__social:`mr-6`,
    footer__sociallink:`cursor-pointer no-underline`,
    footer__right:`flex`,
    footer__items:`mx-[50px] text-base leading-[19px] font-Inter text-white`,
    footer__sublist:`flex flex-col items-start mt-6`,
    footer__subitems:`text-[#D9DBDE] mt-6`,
    footer__sublink:`transition duration-500 ease-in-out transform hover:text-white hover:scale-110`,

    
    }
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footer__container}>
          <div className={styles.footer__left}>
            <div className={styles.footer__logo}>
              <a className={styles.footer__link} href="/">
                <Image
                  src={FooterLogo}
                  width={124}
                  height={39}
                />
              </a>
            </div>
            <div className={styles.footer__text}>
              Your Best Private Hideway From Crowd. Back to Nature.
            </div>
            <ul className={styles.footer__sociallist}>
              <li className={styles.footer__social}>
                <a className={styles.footer__sociallink} href="/">
                  <Image
                    src={Twitter}
                    width={32}
                    height={32}
                  />
                </a>
              </li>
              <li className={styles.footer__social}>
                <a className={styles.footer__sociallink} href="/">
                  <Image
                    src={Instagram}
                    width={32}
                    height={32}
                  />
                </a>
              </li>
              <li className={styles.footer__social}>
                <a className={styles.footer__sociallink} href="/">
                  <Image
                    src={Facebook}
                    width={32}
                    height={32}
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.footer__right}>
            <ul className={styles.footer__list}>
              <li className={styles.footer__items}>
                Rooms
                <ul className={styles.footer__sublist}>
                  <li className={styles.footer__subitems}>
                    <a className={styles.footer__sublink} href="/">
                      Single Room
                    </a>
                  </li>
                  <li className={styles.footer__subitems}>
                    <a className={styles.footer__sublink} href="/">
                      Double Room
                    </a>
                  </li>
                  <li className={styles.footer__subitems}>
                    <a className={styles.footer__sublink} href="/">
                      Cabin
                    </a>
                  </li>
                  <li className={styles.footer__subitems}>
                    <a className={styles.footer__sublink} href="/">
                      Custom Room
                    </a>
                  </li>
                </ul>
              </li>
              <li className={styles.footer__items}>
                Reservation
                <ul className={styles.footer__sublist}>
                  <li className={styles.footer__subitems}>
                    <a className={styles.footer__sublink} href="/">
                    See the Steps
                    </a>
                  </li>
                  <li className={styles.footer__subitems}>
                    <a className={styles.footer__sublink} href="/">
                    Best Time
                    </a>
                  </li>
                </ul>
              </li>
              <li className={styles.footer__items}>
                Contact
                <ul className={styles.footer__sublist}>
                  <li className={styles.footer__subitems}>
                    <a className={styles.footer__sublink} href="/">
                    Our Number
                    </a>
                  </li>
                  <li className={styles.footer__subitems}>
                    <a className={styles.footer__sublink} href="/">
                    Our Email
                    </a>
                  </li>
                  <li className={styles.footer__subitems}>
                    <a className={styles.footer__sublink} href="/">
                    Our Location
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer