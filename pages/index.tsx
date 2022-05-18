import type { NextPage } from 'next'
import Coozy from '../components/coozy/coozy';
import Header from '../components/header/header';
import Intro from '../components/intro/intro';
const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Intro />
      <Coozy/>
    </>
  )
}

export default Home
