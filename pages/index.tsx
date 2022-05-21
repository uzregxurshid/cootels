import type { NextPage } from 'next'
import Activity from '../components/activity/activity';
import Blog from '../components/blogs/blogs';
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
      <Blog/>
    </>
  )
}

export default Home
