/* eslint-disable */
import type { NextPage } from 'next'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from 'next/image'
import Logo from '../../assets/images/Cootels.svg';
import React from 'react';
const Header: NextPage = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const toggle = React.useRef<HTMLDivElement>(null);
  const openToggle = () => {
    toggle.current?.classList.toggle("invisible");
  }

  const closeToggle = () => {
    toggle.current?.classList.toggle("invisible");
  }

  const styles = {
    header: `header`,
    container: `max-w-[1240px] w-full mx-auto block px-5 pt-[37px] pb-[36px]`,
    header__container: `flex item-center justify-between`,
    logo: 'block',
    list: 'hidden items-center md:flex',
    list__item: 'px-[16px]',
    list__link: 'font-Inter font-medium text-base hover:opacity-75 text-[#192252] transition-opacity duration-200',
    getStarted: 'hidden md:block font-Inter w-[121px] h-[47px] rounded bg-[#0E1734] text-base text-white transition duration-500 hover:bg-[#fff] hover:text-[#192252] border-2 border-[#192252]',
    hamburger: `height-[47px] w-[47px] flex flex-col  md:hidden cursor-pointer `,
    hamburger_span1: `h-[3px] w-[42px] bg-[#0E1734] mt-2 block rounded`,
    hamburger_span2: `h-[3px] w-[35px] bg-[#0E1734] mt-2 block rounded`,
    hamburger_span3: `h-[3px] w-[28px] bg-[#0E1734] mt-2 block rounded`,
    special: `invisible flex flex-col items-center md:hidden mx-auto absolute top-0 left-0 bg-white z-[1] w-screen pt-[37px] px-4 pb-6`,
    spheader:'flex justify-between items-center w-full',
    hamburger_span11: `h-[3px] w-[30px] bg-[#0E1734] block rounded rotate-45`,
    hamburger_span12: `h-[3px] w-[30px] bg-[#0E1734] block rounded rotate-[-45deg] translate-x-[0.5px] translate-y-[-3.5px]`,
    hamburger1: `height-[47px] w-[47px] flex flex-col  md:hidden cursor-pointer py-3 `,
    splist:'flex flex-col',
    list__sitem:'mt-6'
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
                Contacts
              </a>
            </li>
          </ul>

          <button className={styles.getStarted}>
            Get Started
          </button>
          <button className={styles.hamburger} onClick={openToggle}>
            <span className={styles.hamburger_span1}></span>
            <span className={styles.hamburger_span2}></span>
            <span className={styles.hamburger_span3}></span>
          </button>
        </div>
        <div className={styles.special} data-aos="fade-up" ref={toggle}>
          <div className={styles.spheader}>
            <div className={styles.logo}>
              <a href="/">
                <Image
                  src={Logo}
                  width={123}
                  height={39}
                />
              </a>
            </div>
            <button className={styles.hamburger1} onClick={closeToggle}>
            <span className={styles.hamburger_span11}></span>
            <span className={styles.hamburger_span12}></span>
          </button>
          </div>
          <ul className={styles.splist}>
            <li className={styles.list__sitem}>
              <a className={styles.list__link} href="/">
                Rooms
              </a>
            </li>
            <li className={styles.list__sitem}>
              <a className={styles.list__link} href="/">
                Reservation
              </a>
            </li>
            <li className={styles.list__sitem}>
              <a className={styles.list__link} href="/">
                Contacts
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
