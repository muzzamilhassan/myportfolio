import React from 'react'
import Title from '../components/title/Title'
import Navbar from '../components/Navbar'
// import porject1 from './project-1.jpg'
const Portfolio = () => {
  return (
    <div>
      <Title bgname="WORKS" name="MY" me="PORTFOLIO" />
      <div className="portfolio">
        <div className='subPortfolio'>
          <img src="./project-1.jpg" alt="" />
          <div className="hoverr">
          <h5>muzzamilhassan302@gmail.com</h5>

          </div>
        </div>
        <div className='subPortfolio'>
          <img src="./project-2.jpg" alt="" />
          <div className="hoverr">
          <h5>muzzamilhassan302@gmail.com</h5>

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