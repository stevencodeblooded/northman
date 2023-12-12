import AboutHeader from "../components/About/AboutHeader"
import BestAward from "../components/About/BestAward"
import VisionMission from "../components/About/VisionMission"
import WelcomeMessage from "../components/About/WelcomeMessage"
import Cta from "../components/Home/Cta"
import Detail from "../components/Home/Detail"
import EasenBurden from "../components/Home/EasenBurden"
import HappyClients from "../components/Home/HappyClients"
import Partnership from "../components/Home/Partnership"

const About = () => {
  return (
    <>
      <AboutHeader />
      <div className="bg-green-400">
        <EasenBurden />
      </div>
      <Detail />
      <div className="bg-green-400">
        <Partnership />
      </div>
      <WelcomeMessage />
      <Cta />
      <VisionMission />
      <BestAward />
      <HappyClients />
    </>
  )
}

export default About