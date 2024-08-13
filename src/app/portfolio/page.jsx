
import React from 'react';
import Title from '../components/title/Title';
import Navbar from '../components/Navbar';
import Link from 'next/link';
import { FaLink } from "react-icons/fa";

const Portfolio = () => {
  return (
    <div>
      <Title bgname="WORKS" name="MY" me="PORTFOLIO" />
      <div className="portfolio grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">

        {/* Portfolio Item 1 */}
        <div className='subPortfolio relative'>
          <img src="./project-2.png" alt="Project 2" className='w-full h-full object-cover' />
          <div className="hoverr absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
            <div className='space-y-2 text-center'>
              <Link href={'https://travelandtours12.netlify.app/'} className='text-xl text-white hover:text-white flex justify-center space-x-2 px-6' target='_blank'>
                <FaLink className='text-2xl mr-2' /> Travels & Tours
              </Link>
              <h1 className='text-white selection:bg-black'>muzzamilhassan302@gmail.com</h1>
            </div>
          </div>
        </div>

        {/* Portfolio Item 2 */}
        <div className='subPortfolio relative'>
          <img src="./project-1.png" alt="Project 1" className='w-full h-full object-cover' />
          <div className="hoverr absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
            <div className='space-y-2 text-center'>
              <Link href={'https://headphone-store-muzzi.netlify.app/'} className='text-xl text-white hover:text-white flex justify-center space-x-2' target='_blank'>
                <FaLink className='text-2xl mr-2' /> Headphone-Store
              </Link>
              <h1 className='text-white selection:bg-black'>muzzamilhassan302@gmail.com</h1>
            </div>
          </div>
        </div>

        {/* Portfolio Item 3 */}
        <div className='subPortfolio relative'>
          <img src="./project-3.jpg" alt="Project 3" className='w-full h-full object-cover' />
          <div className="hoverr absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
            <h5 className='text-white selection:bg-black'>muzzamilhassan302@gmail.com</h5>
          </div>
        </div>

        {/* Portfolio Item 4 */}
        <div className='subPortfolio relative'>
          <img src="./project-4.jpg" alt="Project 4" className='w-full h-full object-cover' />
          <div className="hoverr absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
            <h5 className='text-white selection:bg-black'>muzzamilhassan302@gmail.com</h5>
          </div>
        </div>

        {/* Portfolio Item 5 */}
        <div className='subPortfolio relative'>
          <img src="./project-5.jpg" alt="Project 5" className='w-full h-full object-cover' />
          <div className="hoverr absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
            <h5 className='text-white selection:bg-black'>muzzamilhassan302@gmail.com</h5>
          </div>
        </div>

        {/* Portfolio Item 6 */}
        <div className='subPortfolio relative'>
          <img src="./project-6.jpg" alt="Project 6" className='w-full h-full object-cover' />
          <div className="hoverr absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
            <h5 className='text-white selection:bg-black'>muzzamilhassan302@gmail.com</h5>
          </div>
        </div>

        {/* Portfolio Item 7 */}
        <div className='subPortfolio relative'>
          <img src="./project-7.jpg" alt="Project 7" className='w-full h-full object-cover' />
          <div className="hoverr absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
            <h5 className='text-white selection:bg-black'>muzzamilhassan302@gmail.com</h5>
          </div>
        </div>

        {/* Portfolio Item 8 */}
        <div className='subPortfolio relative'>
          <img src="./project-8.jpg" alt="Project 8" className='w-full h-full object-cover' />
          <div className="hoverr absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
            <h5 className='text-white selection:bg-black'>muzzamilhassan302@gmail.com</h5>
          </div>
        </div>

        {/* Portfolio Item 9 */}
        <div className='subPortfolio relative'>
          <img src="./project-9.jpg" alt="Project 9" className='w-full h-full object-cover' />
          <div className="hoverr absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
            <h5 className='text-white selection:bg-black'>muzzamilhassan302@gmail.com</h5>
          </div>
        </div>

      </div>
      <Navbar />
    </div>
  )
}

export default Portfolio;
