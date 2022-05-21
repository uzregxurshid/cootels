import type { NextPage } from 'next'
import Activity from '../components/activity/activity';
import Blog from '../components/blogs/blogs';
import Coozy from '../components/coozy/coozy';
import Header from '../components/header/header';
import Intro from '../components/intro/intro';
import Tips from '../components/tips/tips';
const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Intro />
      <Coozy/>
      <Activity/>
      <Blog/>
      <Tips/>
    </>
  )
}

export default Home
