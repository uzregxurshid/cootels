import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  const styles = {
    header:`header`,
    container:`max-w-[1240px] px-5`,
    header_container:``
  }
  return (

   <div className={styles.header}>
     <div className={styles.container}>
      <div className={styles.header_container}>
        <div className=""></div>
      </div>
     </div>
   </div>
  )
}

export default Home
