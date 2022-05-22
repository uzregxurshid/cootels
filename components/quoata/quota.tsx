import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Avatar from "../../assets/images/quota/avatar.png";
import { Pagination } from "swiper";
import Image from "next/image";
const styles = {
  quota: `quota`,
  container: `max-w-[1240px] w-full mx-auto block px-5 pt-[80px] pb-[80px]`,
  quota__container: ``,
  quota__header: `font-Montserrat font-semibold text-5xl text-[#192252] leading-[4.5rem]`,
  quota__image: ``,
  quota__wrapper: `mt-[62px]`,
  quota__text:`font-Inter text-main mt-11 w-[793px] text-[#848FAC]`,
  quota__name:`font-Inter font-bold text-[#192252] text-xl leading-[30px] mt-10 mb-8`,
}

const Quota = () => {
  return (
    <div className={styles.quota}>
      <div className={styles.container}>
        <div className={styles.quota__container}>
          <Swiper
            pagination={
              {
              dynamicBullets: true,
              clickable: true,
            }}

            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <h2 className={styles.quota__header}>
                Hear From Our Happy Customers
              </h2>

              <div className={styles.quota__wrapper}>
                <Image
                  className={styles.quota__image}
                  src={Avatar}
                  alt="avatar"
                  width={120}
                  height={120}
                />
              </div>
              <p className={styles.quota__text}>
                “Great service, great food, great people. The scenery is also beautiful, you can do so much activity even with your famility. Worth every penny! you should come and see for your self.  5 out of 5! the waffle is great!”
              </p>

              <p className={styles.quota__name}>
                Kirana Dunham
              </p>
            </SwiperSlide>

            <SwiperSlide>
              <h2 className={styles.quota__header}>
                Hear From Our Happy Customers
              </h2>

              <div className={styles.quota__wrapper}>
                <Image
                  className={styles.quota__image}
                  src={Avatar}
                  alt="avatar"
                  width={120}
                  height={120}
                />
              </div>
              <p className={styles.quota__text}>
                “Great service, great food, great people. The scenery is also beautiful, you can do so much activity even with your famility. Worth every penny! you should come and see for your self.  5 out of 5! the waffle is great!”
              </p>

              <p className={styles.quota__name}>
                Kirana Dunham
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <h2 className={styles.quota__header}>
                Hear From Our Happy Customers
              </h2>

              <div className={styles.quota__wrapper}>
                <Image
                  className={styles.quota__image}
                  src={Avatar}
                  alt="avatar"
                  width={120}
                  height={120}
                />
              </div>
              <p className={styles.quota__text}>
                “Great service, great food, great people. The scenery is also beautiful, you can do so much activity even with your famility. Worth every penny! you should come and see for your self.  5 out of 5! the waffle is great!”
              </p>

              <p className={styles.quota__name}>
                Kirana Dunham
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <h2 className={styles.quota__header}>
                Hear From Our Happy Customers
              </h2>

              <div className={styles.quota__wrapper}>
                <Image
                  className={styles.quota__image}
                  src={Avatar}
                  alt="avatar"
                  width={120}
                  height={120}
                />
              </div>
              <p className={styles.quota__text}>
                “Great service, great food, great people. The scenery is also beautiful, you can do so much activity even with your famility. Worth every penny! you should come and see for your self.  5 out of 5! the waffle is great!”
              </p>

              <p className={styles.quota__name}>
                Kirana Dunham
              </p>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
export default Quota;
