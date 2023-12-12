import { faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import profilePhoto from '../../assets/female-1.jpg'

const HappyClients = () => {
  return (
    <div className="py-10">
      <section className="max-w-6xl my-0 mx-auto p-8">
        <div className="mb-20">
          <h2 className="text-base font-semibold mb-5">Testimonials</h2>
          <h1 className="text-3xl font-bold text-cyan-950 md:text-4xl leading-10">What Our Happy Client Say About Us</h1>
        </div>

        <div className="flex flex-col gap-10 items-center sm:flex-row justify-between md:gap-32">
          <img src={profilePhoto} alt="profile photo" className=" w-60 h-60 rounded-full" />
          <div className="flex flex-col gap-4">
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur. Commodo pulvinar molestie pellentesque urna libero velit porta. Velit
              pellentesque hac gravida pellentesque est semper. Duis lectus gravida ultricies eleifend in pharetra faucibus
              orci sem. Proin ac a cursus praesent. Malesuada risus amet nunc posuere rhoncus accumsan congue id dolor.
              Convallis maecenas sed in pellentesque. Diam tristique semper mauris dolor amet. Dolor elit nunc et purus
              quam amet laoreet eu risus.
            </p>
            <div className="flex items-center gap-4">
              <h3 className='text-lg text-cyan-950 font-semibold'>Johnatan G - </h3>
              <p className="flex gap-1"><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></p>
              <span></span>
              <p>4.8/5 322 Reviewed</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HappyClients