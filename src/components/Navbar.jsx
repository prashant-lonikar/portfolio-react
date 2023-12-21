import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/logo3.png'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
  return (
    <div className='fixed w-full items-center justify-between h-[80px] flex bg-[#0a192f] px-4 text-gray-300'>
        <div>
            <img src={Logo} alt="Logo Image" style={{width: '50px'}} />
        </div>

        {/* menu */}
            <ul className='hidden md:flex'>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Work</li>
                <li>Contact</li>
            </ul>

        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10 cursor-pointer'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobile Menu */}
        <ul className={!nav ? 'hidden' : 'absolute left-0 top-0 w-full h-screen bg-[#0a192c] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>Home</li>
            <li className='py-6 text-4xl'>About</li>
            <li className='py-6 text-4xl'>Skills</li>
            <li className='py-6 text-4xl'>Work</li>
            <li className='py-6 text-4xl'>Contact</li>
        </ul>

        {/* Social Icons */}
        <div className='hidden md:flex fixed flex-col top-[35%] right-0'>
            <ul>
                <li name = 'LinkedIn' className='w-[160px] h-[60px] flex justify-between items-center mr-[-100px] hover:mr-[-10px] duration-300 bg-blue-600'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href="/">
                        LinkedIn <FaLinkedin size={30}/>
                    </a>
                </li>

                <li className='w-[160px] h-[60px] flex justify-between items-center mr-[-100px] hover:mr-[-10px] duration-300 bg-[#333333]'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href="/">
                        Github <FaGithub size={30}/>
                    </a>
                </li>

                <li className='w-[160px] h-[60px] flex justify-between items-center mr-[-100px] hover:mr-[-10px] duration-300 bg-green-600'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href="/">
                        Email <HiOutlineMail size={30}/>
                    </a>
                </li>

                <li className='w-[160px] h-[60px] flex justify-between items-center mr-[-100px] hover:mr-[-10px] duration-300 bg-gray-500'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href="/">
                        Resume <BsFillPersonLinesFill size={30}/>
                    </a>
                </li>

            </ul>
        </div>

    </div>
  )
}

export default Navbar