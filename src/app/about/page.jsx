import React from 'react'
import Link from 'next/link';
import Navbar from '../components/Navbar'
import Btn from '../components/btn/Btn'
import { RiDownloadFill } from "react-icons/ri";
import Cards from '../components/cart/Cards';
import Skill from '../components/skill/Skill';
import Experience from '../components/experience/Experience';
import { MdEmail } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";
import Title from '../components/title/Title';

const About = () => {
  return (
    <div className='about-sec'>
      <Title bgname="RESUME" name="ABOUT" me="ME"/>
      <div className='about-data'>

        {/* section one is start  */}

        <div className="about-dataa">
          <div className='sec'>
            <h1>PERSONAL INFOS</h1>
            <div className="sect">

              <div className="sec1">
                <h3>First Name: <span>Muzzamil</span></h3>
                <h3>Last Name: <span>Hassan</span></h3>
                <h3>Age: <span>22 Years</span></h3>
                <h3>Nationality: <span>Pakistan</span></h3>
                <h3>Freelance: <span>Available</span></h3>
              </div>
              <div className="sec1">
                <h3>Address: <span>KPK,Swabi Topi</span></h3>
                <h3>Phone: <span>+923055779207</span></h3>
                <h3>Email: <span>muzzamilhassan302@gmail.com</span></h3>
                <h3>Langages: <span>Urdu,English</span></h3>
              </div>

            </div>

            <Link href={"CV.pdf"} download={"CV.pdf"} className="btnn text-white">

              <Btn title="DOWNLOAD CV" icon=<RiDownloadFill /> />
            </Link>

          </div>
          <div className='sec'>
            <div className="sect">
              <Cards exp="1" first="YEARS OF" last="EXPERIENCE" />
              <Cards exp="10" first="COMPLETED" last="PROJECTS" />
              <Cards exp="10" first="HAPPY" last="CUSTOMERS" />
              <Cards exp="7" first="AWARDS" last="WON" />
            </div>
          </div>

        </div>

        {/* section one is end  */}
        {/* section two is start  */}
        <div className="skill pt-24">
          <h1 className='text-center text-2xl font-bold'>MY SKILLS</h1>
          <div>
            <Skill />
            <div className='linee'></div>
          </div>
        </div>
        {/* section two is end  */}
        <div className='expp py-10'>

          <h1 className='text-center text-2xl font-bold'>EXPERIENCE & EDUCATION</h1>

          <div className="experience">
            <div><Experience year="2020" logo=<MdEmail/> title="WEB DEVELOPER" from="FREELANCER/LINKEEDIN/UPWORK"/></div>
            <div><Experience year="2021" logo=<FaGraduationCap/>  title="ENGINEERING DEGREE" from="GOVERNMENT COLLOGE"/></div>
            <div><Experience year="2022" logo=<MdEmail/>  title="UI/UX DESIGNER" from="FREELANCER/LINKEDIN/UPWORK"/></div>
            <div><Experience year="2023" logo=<FaGraduationCap/>  title="BACHELOR DEGREE " from="UNIVERSITY OF HARIPUR"/></div>
            <div><Experience year="2024" logo=<MdEmail/>  title="FREELANCER" from="FREELANCER/LINKEDIN/UPWORK"/></div>
            <div><Experience year="2020" logo=<FaGraduationCap/>  title="WEB DEVELOPER" from="FREELANCER/LINKEDIN/UPWORK"/></div>
          </div>
          <div className='linee'></div>
        </div>
      </div>

      <Navbar />
    </div>
  )
}

export default About