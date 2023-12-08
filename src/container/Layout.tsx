import { Outlet } from 'react-router-dom'
import Navbar from '../Shared/Navbar'
import Footer from '../Shared/Footer'

const Layout = () => {
  return (
    <div className='relative min-h-screen'>
        <Navbar />
        <Outlet />
        <section className='sticky top-full'>
          <Footer /> 
        </section>
    </div>
  )
}

export default Layout