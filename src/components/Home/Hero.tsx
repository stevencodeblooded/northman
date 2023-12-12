import { Link } from "react-router-dom"
import heroImage from '../../assets/hero-image.jpg'

const Hero = () => {
  return (
    <div className="">
      <section className="max-w-7xl my-0 mx-auto px-8 py-20">
        <div className="flex flex-col md:flex-row">
          <div className="w-4/5 mb-8 md:w-3/4">
            <h1 className="text-3xl leading-10 w-full font-bold mb-10 sm:text-4xl sm:leading-relaxed md:text-5xl md:leading-normal text-cyan-950">Uphold Truth For <br className="hidden lg:block"/> Justice With <span className="text-green-400 uppercase">Northman <br className="hidden lg:block" /></span> Law Firm  </h1>
            <Link to={'/'} className=" px-4 py-2 rounded bg-cyan-950 text-sky-50 w-fit text-base font-medium">Get Started</Link>
          </div>

          <div className="w-full md:w-3/4">
            <img src={heroImage} alt="hero image" className="w-full object-cover rounded h-full" />
          </div>

        </div>
      </section>
    </div>
  )
}

export default Hero