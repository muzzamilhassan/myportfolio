
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
      <Title bgname="RESUME" name="ABOUT" me="ME" />
      <div className='about-data'>

        {/* Section One */}
        <div className="about-dataa flex flex-col lg:flex-row lg:justify-between">
          <div className='sec w-full lg:w-1/2 p-4'>
            <h1 className="text-2xl font-bold mb-4">PERSONAL INFOS</h1>
            <div className="sect grid grid-cols-1 sm:grid-cols-2 gap-4">

              <div className="sec1">
                <h3 className="mb-2">First Name: <span className="font-semibold">Muzzamil</span></h3>
                <h3 className="mb-2">Last Name: <span className="font-semibold">Hassan</span></h3>
                <h3 className="mb-2">Age: <span className="font-semibold">22 Years</span></h3>
                <h3 className="mb-2">Nationality: <span className="font-semibold">Pakistan</span></h3>
                <h3 className="mb-2">Freelance: <span className="font-semibold">Available</span></h3>
              </div>
              <div className="sec1">
                <h3 className="mb-2">Address: <span className="font-semibold">KPK, Swabi Topi</span></h3>
                <h3 className="mb-2">Phone: <span className="font-semibold">+923055779207</span></h3>
                <h3 className="mb-2">Email: <span className="font-semibold">muzzamilhassan302@gmail.com</span></h3>
                <h3 className="mb-2">Languages: <span className="font-semibold">Urdu, English</span></h3>
              </div>

            </div>

            <Link href={"CV.pdf"} download={"CV.pdf"} className="btnn text-white inline-block mt-6">
              <Btn title="DOWNLOAD CV" icon={<RiDownloadFill />} />
            </Link>
          </div>

          <div className='sec w-full lg:w-1/2 p-4'>
            <div className="sect grid grid-cols-2 gap-4">
              <Cards exp="1" first="YEARS OF" last="EXPERIENCE" />
              <Cards exp="10" first="COMPLETED" last="PROJECTS" />
              <Cards exp="10" first="HAPPY" last="CUSTOMERS" />
              <Cards exp="7" first="AWARDS" last="WON" />
            </div>
          </div>
        </div>

        {/* Section Two */}
        <div className="skill pt-12 lg:pt-24">
          <h1 className='text-center text-2xl font-bold mb-6'>MY SKILLS</h1>
          <div>
            <Skill />
            <div className='linee mt-8'></div>
          </div>
        </div>

        {/* Section Three */}
        <div className='expp py-10'>
          <h1 className='text-center text-2xl font-bold mb-6'>EXPERIENCE & EDUCATION</h1>

          <div className="experience grid grid-cols-1 md:grid-cols-2 gap-6">
            <Experience year="2020" logo={<MdEmail />} title="WEB DEVELOPER" from="FREELANCER/LINKEDIN/UPWORK" />
            <Experience year="2021" logo={<FaGraduationCap />} title="ENGINEERING DEGREE" from="GOVERNMENT COLLEGE" />
            <Experience year="2022" logo={<MdEmail />} title="UI/UX DESIGNER" from="FREELANCER/LINKEDIN/UPWORK" />
            <Experience year="2023" logo={<FaGraduationCap />} title="BACHELOR DEGREE" from="UNIVERSITY OF HARIPUR" />
            <Experience year="2024" logo={<MdEmail />} title="FREELANCER" from="FREELANCER/LINKEDIN/UPWORK" />
            <Experience year="2020" logo={<FaGraduationCap />} title="WEB DEVELOPER" from="FREELANCER/LINKEDIN/UPWORK" />
          </div>
          <div className='linee mt-8'></div>
        </div>

      </div>
      <Navbar />
    </div>
  )
}

export default About;
