import FeaturedCateogory from "../components/FeaturedCategory/FeaturedCateogory"
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts"
import Hero from "../components/Hero/Hero"
import Navbar from "../components/Navbar/Navbar"

const Home = () => {
  return (
    <div className="relative bg-[#F2F4F8]">
      <Navbar />
      <Hero />
      <FeaturedCateogory />
      <FeaturedProducts />
    </div>
  )
}

export default Home
