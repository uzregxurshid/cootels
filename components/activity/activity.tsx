import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "next/image";
import Imagef from '../../assets/images/active/imagef.png';
import Imaget from '../../assets/images/active/imaget.png';
const Activity = () => {
  const styles = {
    active:`active`,
    container:`max-w-[1240px] w-full mx-auto block px-5 pt-[80px] pb-[80px]`,
    active__container:`flex flex-col`,
    active__top:`flex flex-row items-center justify-between`,
    active__bottom:`flex flex-row items-center justify-between mt-8`,
    active__header: `text-h2 font-Montserrat font-semibold text-[#192252] tracking-[-0.01em;]`,
    active__text: `font-Inter text-main mt-6 w-[584px] text-[#848FAC]`,
    active__right:``,
    active__left:``

  }
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (

    <div className={styles.active} >
      <div className={styles.container}>
        <div className={styles.active__container}>
          <div className={styles.active__top}>
            <div className={styles.active__left} data-aos="flip-up">
              <h2 className={styles.active__header}>
                Cabin Activities
              </h2>
              <p className={styles.active__text}>
                Don't worry to get bored easily in our cabin. We have so many cabin activities for you to do it alone or with group. Maybe this is the best chance for you to make new friends or even a lover.
              </p>
            </div>
            <div className={styles.active__right}>
              <Image
                src={Imaget}
                width={384}
                height={384}
              />
            </div>
          </div>
          <div className={styles.active__bottom} data-aos="flip-up">
            <div className={styles.active__left}>
              <Image
                src={Imagef}
                width={384}
                height={384}
              />
            </div>
            <div className={styles.active__right}>
              <h2 className={styles.active__header}>
                100% Organic Food
              </h2>
              <p className={styles.active__text}>
                We served 100% organic, low process and delicious food. We allow our guest to have breakfast or dinner request.What ever made your taste buds happy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Activity