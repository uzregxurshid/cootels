import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "next/image";
import Image1 from '../../assets/images/blog/image1.png';
import Image2 from '../../assets/images/blog/image2.png';
import Image3 from '../../assets/images/blog/image3.png';
import ArrowRight from '../../assets/images/blog/Arrow_Right.svg';
const Blogs = () => {
  const styles = {
    blog: `blog`,
    container: `max-w-[1240px] w-full mx-auto block px-5 pt-[80px] pb-[80px]`,
    blog__container: `flex flex-col`,
    blog__header: `text-h2 font-Montserrat font-semibold text-[#192252] tracking-[-0.01em;] text-center`,
    blog__text: `font-Inter text-main mt-6 w-[584px] text-[#848FAC] text-center`,
    blog__button: `font-Inter mt-8 w-[121px] h-[47px] rounded bg-[#0E1734] text-base text-white transition duration-500 hover:bg-[#fff] hover:text-[#192252] border-2 border-[#192252]`,
    blog__btnwrap: `text-center`,
    blog__top: `flex flex-col items-center`,
    blog__bottom:`mt-[88px]`,
    blog__list: `flex items-center justify-between w-[384px]`,
    blog__item:`flex flex-col mx-3`,
    blog__imgwrapper:`block`,
    blog__title:`mt-8 font-Montserrat font-semibold text-h3 text-black`,
    blog__define:`font-Inter text-main mt-6 w-[584px] text-[#848FAC] w-[384px]`,
    blog__link:`mt-8 flex items-center text-main hover:opacity-75 text-[#192252] transition-opacity duration-200`,
    blog__tlink:`mr-3`,
    blog__image:``,
    blog__larr:``,
  }
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className={styles.blog}>
      <div className={styles.container}>
        <div className={styles.blog__container}>
          <div className={styles.blog__top}>
            <h2 className={styles.blog__header}>Many Rooms to Choose</h2>
            <p className={styles.blog__text}>
              There is a room for every needs. We have room for individuals until family size, we also have a cabin for more private experience
            </p>
            <div className={styles.blog__btnwrap}>
              <button className={styles.blog__button}>
                Explore more
              </button>
            </div>
          </div>
          <div className={styles.blog__bottom}>
            <ul className={styles.blog__list}>
              <li className={styles.blog__item}>
                <div className={styles.blog__imgwrapper}>
                  <Image className={styles.blog__image} src={Image1} width={384} height={489} />
                </div>
                <h3 className={styles.blog__title}>
                  Single Room
                </h3>
                <p className={styles.blog__define}>
                  Best for a brave lone wolf who need comfort and quiet quality time, but you still have a chance to meet others.
                </p>
                <a className={styles.blog__link} href="/">
                 <span className={styles.blog__tlink}> Learn more</span>
                  <Image
                    className={styles.blog__larr}
                    src={ArrowRight}
                    width={20}
                    height={20}
                  />
                </a>
              </li>
              <li className={styles.blog__item}>
                <div className={styles.blog__imgwrapper}>
                  <Image className={styles.blog__image} src={Image2} width={384} height={489} />
                </div>
                <h3 className={styles.blog__title}>
                Double Room
                </h3>
                <p className={styles.blog__define}>
                  Best for a brave lone wolf who need comfort and quiet quality time, but you still have a chance to meet others.
                </p>
                <a className={styles.blog__link} href="/">
                 <span className={styles.blog__tlink}> Learn more</span>
                  <Image
                    className={styles.blog__larr}
                    src={ArrowRight}
                    width={20}
                    height={20}
                  />
                </a>
              </li>
              <li className={styles.blog__item}>
                <div className={styles.blog__imgwrapper}>
                  <Image className={styles.blog__image} src={Image3} width={384} height={489} />
                </div>
                <h3 className={styles.blog__title}>
                  Cootage
                </h3>
                <p className={styles.blog__define}>
                  Best for a brave lone wolf who need comfort and quiet quality time, but you still have a chance to meet others.
                </p>
                <a className={styles.blog__link} href="/">
                 <span className={styles.blog__tlink}> Learn more</span>
                  <Image
                    className={styles.blog__larr}
                    src={ArrowRight}
                    width={20}
                    height={20}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blogs