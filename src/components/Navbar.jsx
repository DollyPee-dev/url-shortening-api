import Button from "./Button"
import Logo from '/images/logo.svg'
import { useEffect, useState } from "react";


const Navbar = () => {

  const [activeNav, setActiveNav] = useState(false);

  const handleNav = () => {
    setActiveNav(prev => !prev);
  }

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)

  }, [])


  return (
    <header className={`${scrolled ? 'bg-white shadow-md' : 'bg-transparent'} 
    containerC font-Poppins_Regular fixed 
    top-0 left-0 right-0 !w-full z-40`}>
      <nav className="flex items-center py-6 relative justify-between">
        <img className="mr-10" src={Logo} alt="" />
        <div className={`
          ${activeNav ? 'flex' : 'hidden'} 
          md:flex flex-col bg-PurpleC 
          text-white max-w-[300px] 
          w-full absolute top-20 right-0 
          text-center py-8 px-12 rounded-2xl
          md:justify-between md:static 
          md:max-w-full md:flex-row
        md:text-GrayC-400 md:p-0 
        md:bg-white gap-2`
        }
        >
          <ul className="flex-col flex items-center gap-6
              md:flex-row">
            <li className="font-Poppins_Medium cursor-pointer  hover:text-gray-700">Features</li>
            <li className="font-Poppins_Medium cursor-pointer  hover:text-gray-700">Pricing</li>
            <li className="font-Poppins_Medium cursor-pointer  hover:text-gray-700">Resources</li>
            <hr className="w-full opacity-20 md:hidden" />
          </ul>
          <div className="ml-auto flex-col w-full  mt-6
              flex items-center gap-6
              md:flex-row md:mt-0 md:w-fit">
            <p className="cursor-pointer font-Poppins_Medium  hover:text-gray-700">Login</p>
            <Button textContent='Sign Up' width='w-full' />
          </div>
        </div>
        <span onClick={handleNav} className="md:hidden text-2xl cursor-pointer">
          <i className={`pi ${activeNav ? 'pi-times' : 'pi-bars'}`}></i>
        </span>
      </nav>
    </header>
  )
}

export default Navbar