import { faFacebook, faLinkedin, faSquareTwitter, faSquareInstagram } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import northManLogo from '../assets/northmanlaw-logo.png'
import { Link } from "react-router-dom"
import { faLocation, faMailBulk, faPhone } from "@fortawesome/free-solid-svg-icons"

const Footer = () => {
  return (
    <div className="bg-cyan-950 text-sky-50">
      <section className="max-w-7xl my-0 mx-auto px-8 py-5 ">
        <div className="flex">
          <div>
            <img src={northManLogo} alt="northman law logo" className="" />
          </div>

          <div>
            <hr />
          </div>

          <div>
            <div>
              <h2>About Us</h2>
              <p>
                Lorem ipsum dolor sit amet
                consectetur. Commodo
                pulvinar molesti.
              </p>
              <ul>
                <li><FontAwesomeIcon icon={faFacebook} /></li>
                <li><FontAwesomeIcon icon={faLinkedin} /></li>
                <li><FontAwesomeIcon icon={faSquareTwitter} /></li>
                <li><FontAwesomeIcon icon={faSquareInstagram} /></li>
              </ul>
            </div>

            <div>
              <h2>Services</h2>
              <ul>
                <li>Business Law</li>
                <li>Education Law</li>
                <li>Legal Consultant</li>
                <li>General Lawyer</li>
              </ul>
            </div>

            <div>
              <h2>Page</h2>
              <li><Link to={''}>Lawyer</Link></li>
              <li><Link to={''}>Appointment</Link></li>
              <li><Link to={''}>Documentation</Link></li>
              <li><Link to={''}>Cases</Link></li>
              <li><Link to={''}>News</Link></li>
            </div>

            <div>
              <h2>Links</h2>
              <ul>
                <li><Link to={''}>Term of use</Link></li>
                <li><Link to={''}>Privacy Policy</Link></li>
              </ul>
            </div>

            <div>
              <h2>Contact Us</h2>
              <ul>
                <li><a href="tel:+22 7272 8282"><span><FontAwesomeIcon icon={faPhone} /></span> +22 7272 8282</a></li>
                <li><span><FontAwesomeIcon icon={faLocation}/></span>+7889 Mechanic Rd.Miami, FL 33125</li>
                <li><a href="mailto:northmanlaw@domain.com"><span><FontAwesomeIcon icon={faMailBulk} /></span>northmanlaw@domain.com</a></li>
              </ul>
            </div>
          </div>

          <div>
            <hr />
          </div>

          <div>
            <p>Copyright @2022 Northman All Right Reserved</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer