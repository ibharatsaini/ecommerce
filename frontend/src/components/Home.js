import '../styles/home.css'
import Banner from './landing/Banner'
import Features from './landing/Features'
import NewProducts from './landing/NewProducts'

export default function Home() {
  return (
    <>
    <Banner ></Banner>
    <NewProducts />
    <Features />
    </>
  )
}
