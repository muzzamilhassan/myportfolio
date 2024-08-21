'use client'
import Btn from "../components/btn/Btn";
import { RiDownloadFill } from "react-icons/ri";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import Navbar from "../components/Navbar";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

const Homee = () => {
  
  return (
    <div className="homepage">
      <div className="container-fluid">
        <div className="row items-center w-full h-screen">
          <div className="col-md-4 ml-1">
            <div className="imageWrap bg-black">
              <img src="/img.png" alt="image missing" className="w-full px-4 opacity-90"/>
            </div>
          </div>
          <div className="col-md-6 w-full flex ml-20">
            <div
              style={{
                width: "80%",
              }}
            >
              <div className="flex">
                <span className="line mt-3 mr-3"></span>
                <h1 className="text-5xl font-bold leading-14">
                  <span className="text-yellow text-nowrap">
                    I&apos;M MUZZAMIL
                  </span>
                  <br />
                 
                  <TypeAnimation
                    sequence={[
                     
                      "Designer",
                      1000, 
                      "React Developer",
                      1000,
                      "Freelancer",
                      1000,
                      "Developer",
                      1000,
                    ]}
                    wrapper="span"
                    speed={150}
                
                    style={{ fontSize: "1.1em", display: "inline-block" }}
                    repeat={Infinity}
                  />
                </h1>
              </div>
              <p className="py-10 leading-8">
                I&apos;m a Tunisian based web designer & front‑end developer
                focused on crafting clean & user‑friendly experiences, I am
                passionate about building excellent software that improves the
                lives of those around me.
              </p>
              <div className="flex">
                <Btn title="MORE ABOUT ME"  icon= <FaArrowRightFromBracket className="text-white"/>/>
                <Link href="CV.pdf" download="CV.pdf">
                  <Btn title="DOWNLOAD CV" icon= <RiDownloadFill className="text-white"/> />
                </Link>
              </div>
            </div>
          </div>
          <Navbar />
        </div>
      </div>
    </div>
  );
};

export default Homee;
