import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import blog from '../../assets/Professional services.jpg'

const NewsBlog = () => {
  return (
    <div className=" py-4">
      <section className="max-w-6xl my-0 mx-auto p-8">
        <div className="mb-20">
          <h4 className="text-base font-semibold mb-5">News</h4>
          <div className="flex justify-between ">
            <h1 className="text-3xl font-bold text-cyan-950 md:text-4xl leading-10 w-2/3">The latest news and blog from Northman</h1>
            <Link to={'/'} className="flex items-center gap-2 text-base font-semibold mb-5">See More <FontAwesomeIcon icon={faArrowRight} /></Link>
          </div>
        </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ">
        <div className="flex flex-col gap-4">
          <img src={blog} alt="Blog Image" className="rounded" />
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold text-cyan-950 leading-10 ">7 Cases Have Been Success </h2>
            <hr className="hidden" />
            <p>Lorem ipsum dolor sit amet consecter Commodo pulvinar molestie pellentesque urna liber</p>
            <Link to={'/'} className="px-8 py-2 rounded bg-cyan-950 text-sky-50 w-fit text-base font-medium">Read Now</Link>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <img src={blog} alt="Blog Image" className="rounded" />
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold text-cyan-950 leading-10 ">7 Cases Have Been Success </h2>
            <hr className="hidden" />
            <p>Lorem ipsum dolor sit amet consecter Commodo pulvinar molestie pellentesque urna liber</p>
            <Link to={'/'} className="px-8 py-2 rounded bg-cyan-950 text-sky-50 w-fit text-base font-medium">Read Now</Link>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <img src={blog} alt="Blog Image" className="rounded" />
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold text-cyan-950 leading-10 ">7 Cases Have Been Success </h2>
            <hr className="hidden" />
            <p>Lorem ipsum dolor sit amet consecter Commodo pulvinar molestie pellentesque urna liber</p>
            <Link to={'/'} className="px-8 py-2 rounded bg-cyan-950 text-sky-50 w-fit text-base font-medium">Read Now</Link>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <img src={blog} alt="Blog Image" className="rounded" />
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold text-cyan-950 leading-10 ">7 Cases Have Been Success </h2>
            <hr className="hidden" />
            <p>Lorem ipsum dolor sit amet consecter Commodo pulvinar molestie pellentesque urna liber</p>
            <Link to={'/'} className="px-8 py-2 rounded bg-cyan-950 text-sky-50 w-fit text-base font-medium">Read Now</Link>
          </div>
        </div>


      </div>
      </section>
    </div>
  )
}

export default NewsBlog