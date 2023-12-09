import Cta from "../components/Home/Cta"
import Detail from "../components/Home/Detail"
import EasenBurden from "../components/Home/EasenBurden"
import HappyClients from "../components/Home/HappyClients"
import Hero from "../components/Home/Hero"
import NewsBlog from "../components/Home/NewsBlog"
import Partnership from "../components/Home/Partnership"
import ProfessionalLaywers from "../components/Home/ProfessionalLaywers"
import ProfessionalServices from "../components/Home/ProfessionalServices"

const Home = () => {
  return (
    <div className="">
          <Hero/>
          <EasenBurden />
          <Detail />
          <Partnership />
          <ProfessionalServices />
          <ProfessionalLaywers />
          <Cta />
          <HappyClients />
          <NewsBlog />
    </div>
  )
}

export default Home