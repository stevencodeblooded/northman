import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import NorthmanLogo from '../assets/northmanlaw-logo.png'
import {  useState } from "react"
import { Link, NavLink } from "react-router-dom"

const Navbar = () => {
  const [mobileView, setMobileView] = useState(false);
  
  return (
    <div className="">
      <section className="max-w-7xl my-0 mx-auto px-8 py-5">
        <nav className="flex items-center justify-between z-10">
          <Link to={'/'}>
            <img src={NorthmanLogo} alt="Northman Logo" className="cursor-pointer w-40" />
          </Link>

          <p className="cursor-pointer text-3xl md:hidden z-30" onClick={() => setMobileView(!mobileView)}><FontAwesomeIcon icon={faBars} /></p>

        {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-8 ">
            <li className=" text-lg font-medium">
              <NavLink to={'/'} className={({isActive}) => isActive ? 'px-4 py-2 rounded bg-cyan-950 text-sky-50' : ''}>Home</NavLink>
            </li>
            <li className="text-lg font-medium">
              <NavLink to={'/About'} className={({isActive}) => isActive ? 'px-4 py-2 rounded bg-cyan-950 text-sky-50' : ''}>About</NavLink>
            </li>
            <li className="text-lg font-medium">
              <NavLink to={'/Services'} className={({isActive}) => isActive ? 'px-4 py-2 rounded bg-cyan-950 text-sky-50' : ''}>Services</NavLink>
            </li>
            <li className="text-lg font-medium">
              <NavLink to={'/Lawyer'} className={({isActive}) => isActive ? 'px-4 py-2 rounded bg-cyan-950 text-sky-50' : ''}>Lawyer</NavLink>
            </li>
            <li className="text-lg font-medium">
              <NavLink to={'/Contact'} className={({isActive}) => isActive ? 'px-4 py-2 rounded bg-cyan-950 text-sky-50' : ''}>Contact Us</NavLink>
            </li>
          </ul>

          {/* Mobile Navigation */}
          { 
          mobileView && (
            <ul className=" fixed top-0 -right-44 w-96 h-screen z-20 shadow-sm shadow-slate-100 md:hidden pt-32 flex flex-col gap-5 px-8 transition-right duration-300 ease-in-out bg-cyan-600">
              <li className=" text-lg font-medium">
                  <NavLink to={'/'} className={({isActive}) => isActive ? 'px-4 py-2 rounded bg-cyan-950 text-sky-50' : ''} onClick={() => setMobileView(false)}>Home</NavLink>
                </li>
                <li className="text-lg font-medium">
                  <NavLink to={'/About'} className={({isActive}) => isActive ? 'px-4 py-2 rounded bg-cyan-950 text-sky-50' : ''} onClick={() => setMobileView(false)}>About</NavLink>
                </li>
                <li className="text-lg font-medium">
                  <NavLink to={'/Services'} className={({isActive}) => isActive ? 'px-4 py-2 rounded bg-cyan-950 text-sky-50' : ''} onClick={() => setMobileView(false)}>Services</NavLink>
                </li>
                <li className="text-lg font-medium">
                  <NavLink to={'/Lawyer'} className={({isActive}) => isActive ? 'px-4 py-2 rounded bg-cyan-950 text-sky-50' : ''} onClick={() => setMobileView(false)}>Lawyer</NavLink>
                </li>
                <li className="text-lg font-medium">
                  <NavLink to={'/Contact'} className={({isActive}) => isActive ? 'px-4 py-2 rounded bg-cyan-950 text-sky-50' : ''} onClick={() => setMobileView(false)}>Contact Us</NavLink>
                </li>
            </ul>
          )
          }
        </nav>
      </section>
    </div>
  )
}

export default Navbar