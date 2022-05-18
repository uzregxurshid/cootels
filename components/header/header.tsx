import type { NextPage } from 'next'
import Image from 'next/image'
import Logo from '../../assets/images/Cootels.svg';
const Header: NextPage = () => {
  const styles = {
    header: `header`,
    container: `max-w-[1240px] w-full mx-auto block px-5 pt-[37px] pb-[36px]`,
    header__container: `flex item-center justify-between`,
    logo: 'block',
    list: 'flex items-center',
    list__item: 'px-[16px]',
    list__link: 'font-Inter font-medium text-base hover:opacity-75 text-[#192252] transition-opacity duration-200',
    getStarted: 'font-Inter w-[121px] h-[47px] rounded bg-[#0E1734] text-base text-white transition duration-500 hover:bg-[#fff] hover:text-[#192252] border-2 border-[#192252]',

  }
  return (

    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.header__container}>
          <div className={styles.logo}>
            <a href="/">
              <Image
                src={Logo}
                width={123}
                height={39}
              />
            </a>
          </div>

          <ul className={styles.list}>
            <li className={styles.list__item}>
              <a className={styles.list__link} href="/">
                Rooms
              </a>
            </li>
            <li className={styles.list__item}>
              <a className={styles.list__link} href="/">
                Reservation
              </a>
            </li>
            <li className={styles.list__item}>
              <a className={styles.list__link} href="/">
                Contacs
              </a>
            </li>
          </ul>

          <button className={styles.getStarted}>
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header
