import { faBusinessTime, faGavel, faHandshake, faScaleBalanced } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Partnership = () => {
  return (
    <div>
      <section className="max-w-6xl my-0 mx-auto px-8 pt-10 pb-28">
        <div>
          <h1 className="text-3xl font-bold mb-10 text-center text-cyan-950">Our Partnership</h1>
          <div className="flex gap-6  flex-wrap justify-center">
            <div className="flex flex-col items-center gap-2">
              <FontAwesomeIcon icon={faHandshake} className="text-7xl text-green-400 " />
              <h2 className="font-medium text-lg text-cyan-950">Daerazo</h2>
            </div>
            <div className="hidden sm:block border-r-2 h- mx-10 border-green-950"></div>

            <div className="flex flex-col items-center gap-2">
              <FontAwesomeIcon icon={faBusinessTime}  className="text-7xl text-green-400 " />
              <h2 className="font-medium text-lg text-cyan-950">Miguxian</h2>
            </div>
            <div className="hidden sm:block border-r-2 h- mx-10 border-green-950"></div>

            <div className="flex flex-col items-center gap-2">
              <FontAwesomeIcon icon={faScaleBalanced}  className="text-7xl text-green-400 " />
              <h2 className="font-medium text-lg text-cyan-950">Jeninayln</h2>
            </div>
            <div className="hidden sm:block border-r-2 h- mx-10 border-green-950"></div>

            <div className="flex flex-col items-center gap-2">
              <FontAwesomeIcon icon={faGavel}  className="text-7xl text-green-400 " />
              <h2 className="font-medium text-lg text-cyan-950">Superanzo</h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Partnership