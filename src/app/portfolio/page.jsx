import React from 'react'
import Title from '../components/title/Title'
import Navbar from '../components/Navbar'
import Link from 'next/link'
import { FaLink } from "react-icons/fa";

// import porject1 from './project-1.jpg'
const Portfolio = () => {
  return (
    <div>
      <Title bgname="WORKS" name="MY" me="PORTFOLIO" />
      <div className="portfolio">
        <div className='subPortfolio'>
          <img src="./project-2.png" alt="" className='w-full h-full'/>
          <div className="hoverr">
          <div className='space-y-2'>
            
            <Link href={'https://headphone-store-muzzi.netlify.app/'} className='text-xl text-white hover:text-white flex space-x-2 px-6' target='_blank'><FaLink className='text-2xl mr-2'/>Travels & Tours</Link>
            <h1 className='selection:bg-black'>muzzamilhassan302@gmail.com</h1>
          </div>

          </div>
        </div>
        <div className='subPortfolio'>
          <img src="./project-1.png" alt="" className='w-full h-full'/>
          <div className="hoverr">
          <div className='space-y-2'>
            
            <Link href={'https://headphone-store-muzzi.netlify.app/'} className='text-xl text-white hover:text-white flex space-x-2' target='_blank'><FaLink className='text-2xl mr-2'/>Headphone-Store</Link>
            <h1 className='selection:bg-black'>muzzamilhassan302@gmail.com</h1>
          </div>

          </div>
        </div>
        <div className='subPortfolio'>
          <img src="./project-3.jpg" alt="" />
          <div className="hoverr">
          <h5>muzzamilhassan302@gmail.com</h5>

          </div>
        </div>
        <div className='subPortfolio'>
          <img src="./project-4.jpg" alt="" />
          <div className="hoverr">
          <h5>muzzamilhassan302@gmail.com</h5>

          </div>
        </div>
        <div className='subPortfolio'>
          <img src="./project-5.jpg" alt="" />
          <div className="hoverr">
          <h5>muzzamilhassan302@gmail.com</h5>

          </div>
        </div>
        <div className='subPortfolio'>
          <img src="./project-6.jpg" alt="" />
          <div className="hoverr">
            <h5>muzzamilhassan302@gmail.com</h5>
          </div>
        </div>
        <div className='subPortfolio'>
          <img src="./project-7.jpg" alt="" />
          <div className="hoverr">
          <h5>muzzamilhassan302@gmail.com</h5>

          </div>
        </div>
        <div className='subPortfolio'>
          <img src="./project-8.jpg" alt="" />
          <div className="hoverr">
          <h5>muzzamilhassan302@gmail.com</h5>

          </div>
        </div>
        <div className='subPortfolio'>
          <img src="./project-9.jpg" alt="" />
          <div className="hoverr">
          <h5>muzzamilhassan302@gmail.com</h5>

          </div>
        </div>
      </div>
      <Navbar />
    </div>
  )
}

export default Portfolio;