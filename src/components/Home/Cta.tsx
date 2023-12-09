import { Link } from "react-router-dom"

const Cta = () => {
  return (
    <div className="bg-green-400 py-10">
      <section className="max-w-4xl my-0 mx-auto px-8 py-16">
        <div className="text-left sm:text-center">
          <h1 className=" text-3xl font-bold text-cyan-950 md:text-4xl leading-10 mb-6">We Help You With Quality Legal Lawyer</h1>
          <p className="mb-8 text-sm">Lorem ipsum dolor sit amet consectetur. Commodo pulvinar molestie pellentesque urna libero velit porta. Velit pellentesque
            hac gravida pellentesque est semper. Duis lectus gravida ultricies eleifend in pharetra faucibus orci sem. 
          </p>
          <Link to={'/'} className="px-8 py-2 rounded bg-cyan-950 text-sky-50 w-fit text-base font-medium">Get Started</Link>
        </div>
      </section>
    </div>
  )
}

export default Cta