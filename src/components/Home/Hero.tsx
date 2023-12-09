import { Link } from "react-router-dom"
import heroImage from '../../assets/hero-image.jpg'

const Hero = () => {
  return (
    <div className="">
      <section className="max-w-7xl my-0 mx-auto px-8 py-16">
        <div className="flex flex-col gap-8 md:w-full md:flex-row md:items-center">
          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold mb-6 sm:text-4xl text-cyan-950">Uphold Truth For <br className="hidden lg:block"/> justice With <span className="text-green-400">Northman <br className="hidden lg:block" /></span> Law Firm  </h1>
            <Link to={'/'} className=" px-4 py-2 rounded bg-cyan-950 text-sky-50 w-fit text-base font-medium">Get Started</Link>
          </div>
          <div className="md:w-1/2">
            <img src={heroImage} alt="hero image" className="rounded" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero