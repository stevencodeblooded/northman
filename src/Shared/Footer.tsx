import { faFacebook, faLinkedin, faSquareTwitter, faSquareInstagram } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import northManLogo from '../assets/northmanlaw-logo.png'
import { Link } from "react-router-dom"
import { faLocation, faMailBulk, faPhone } from "@fortawesome/free-solid-svg-icons"

const Footer = () => {
  return (
    <div className="bg-green-400  py-10">
      <section className="max-w-7xl my-0 mx-auto px-8 py-5 ">
        <div className="flex flex-col gap-10 items-center">
          <div>
            <img src={northManLogo} alt="northman law logo" className="" />
          </div>

          <div>
            <hr className="" />
          </div>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 px-2">
            <div className="flex flex-col gap-5">
              <h2 className="text-lg font-semibold">About Us</h2>
              <p className="">
                Lorem ipsum dolor sit amet
                consectetur. Commodo
                pulvinar molesti.
              </p>
              <ul className="flex gap-5 text-lg">
                <li><a href="http://facebook.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} className="cursor-pointer hover:scale-125 transition-all hover:text-sky-700" /></a></li>
                <li><a href="http://linkedin.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} className="cursor-pointer hover:scale-125 transition-all hover:text-sky-700" /></a></li>
                <li><a href="http://twitter.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faSquareTwitter} className="cursor-pointer hover:scale-125 transition-all hover:text-sky-700" /></a></li>
                <li><a href="http://instagram.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faSquareInstagram} className="cursor-pointer hover:scale-125 transition-all hover:text-sky-700" /></a></li>
              </ul>
            </div>

            <div className="flex flex-col gap-5">
              <h2 className="text-lg font-semibold">Services</h2>
              <ul className="flex flex-col gap-1  ">
                <li><Link to={'/'} className="hover:text-sky-700 hover:pl-3 transition-all">Business Law</Link></li>
                <li><Link to={'/'} className="hover:text-sky-700 hover:pl-3 transition-all">Education Law</Link></li>
                <li><Link to={'/'} className="hover:text-sky-700 hover:pl-3 transition-all">Legal Consultant</Link></li>
                <li><Link to={'/'} className="hover:text-sky-700 hover:pl-3 transition-all">General Lawyer</Link></li>
              </ul>
            </div>

            <div className="flex flex-col gap-5">
              <h2 className="text-lg font-semibold">Law</h2>
              <ul className="flex flex-col gap-1 ">
                <li><Link to={'/'} className="hover:text-sky-700 hover:pl-3 transition-all">Lawyer</Link></li>
                <li><Link to={'/'} className="hover:text-sky-700 hover:pl-3 transition-all">Appointment</Link></li>
                <li><Link to={'/'} className="hover:text-sky-700 hover:pl-3 transition-all">Documentation</Link></li>
                <li><Link to={'/'} className="hover:text-sky-700 hover:pl-3 transition-all">Cases</Link></li>
                <li><Link to={'/'} className="hover:text-sky-700 hover:pl-3 transition-all">News</Link></li>
              </ul>
            </div>

            <div className="flex flex-col gap-5">
              <h2 className="text-lg font-semibold">Links</h2>
              <ul className="flex flex-col gap-1 ">
                <li><Link to={'/'} className="hover:text-sky-700 hover:pl-3 transition-all">Term of use</Link></li>
                <li><Link to={'/'} className="hover:text-sky-700 hover:pl-3 transition-all">Privacy Policy</Link></li>
              </ul>
            </div>

            <div className="flex flex-col gap-5">
              <h2 className="text-lg font-semibold">Contact Us</h2>
              <ul className="flex flex-col gap-1 ">
                <li className="hover:text-sky-700 hover:pl-3 transition-all"><a className="flex gap-2 items-center" href="tel:+22 7272 8282"><span><FontAwesomeIcon icon={faPhone} /></span> +22 7272 8282</a></li>
                <li className="flex gap-2 items-center hover:text-sky-700 hover:pl-3 transition-all"><span><FontAwesomeIcon icon={faLocation}/></span>+7889 Mechanic Rd.Miami, FL 33125</li>
                <li className="hover:text-sky-700 hover:pl-3 transition-all">
                  <a href="mailto:northmanlaw@domain.com" className="flex gap-2 items-center">
                    <span><FontAwesomeIcon icon={faMailBulk} /></span>
                    northmanlaw@domain.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <hr />
          </div>

          <div>
            <p>Copyright @2023 Northman All Right Reserved</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer