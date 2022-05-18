import type { NextPage } from 'next'
import Activity from '../components/activity/activity';
import Coozy from '../components/coozy/coozy';
import Header from '../components/header/header';
import Intro from '../components/intro/intro';
const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Intro />
      <Coozy/>
      <Activity/>
    </>
  )
}

export default Home
