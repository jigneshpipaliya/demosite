import { FaFacebookF,FaTwitter } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import {Link} from 'react-router-dom/cjs/react-router-dom'

const Header =()=>{
    return(
        <>
        <div className=" w-100 header bg-slate-900 ">
          <div className=" container ">
            <div className=" row flex p-4 items-center  justify-around">
                <div className=" col-3 flex gap-5 ">
                   <a href="" className="icon-color"><FaFacebookF/></a>  
                   <a href="" className=" icon-color"><FaTwitter/></a>
                   <a href="" className=" icon-color"><BsGithub/></a>
                </div>
                <div className=" col-9 flex gap-6 items-center">
                  <span className="icon-color">Call Us :</span><a href="" className=" text-white">+23-345-67890 </a>
                 <a href="" className="icon-color"><MdEmail /></a>
                 <a href="" className=" text-white"> support@gmail.com</a>
                </div>
            </div>
          </div>
          
          <div className=" border border-gray-500" ></div>
          <div className="header-bottom">
            <div className=" container m-auto py-4 ">
              <div className="row flex  justify-between items-center">
                <div className=" col-span-2 ml-10">
                  <a href="" className=" text-white hover:text-red-700 font-bold text-xl">
                  Mega<samp className="text-red-700">kit.</samp> 
                  </a>
                </div>
                <div className=" flex gap-7 items-center">
                     <Link to="/" className=" mark text-white hover:text-red-700">HOME </Link>
                     <Link to="/about" className=" mark text-white  hover:text-red-700">ABOUT </Link>
                     <Link to="/service" className=" mark text-white  hover:text-red-700 ">SERVICE</Link>
                     <Link to="/portfolio" className=" mark text-white  hover:text-red-700">PORTFOLIO </Link>
                     <Link to="/blog" className=" mark text-white  hover:text-red-700">BLOG </Link>
                     <Link to="/contact" className=" mark text-white  hover:text-red-700 ">CONTACT </Link>
                     <button className=' px-5 py-3 ring-2 rounded-full ring-red-500 text-white text-xs hover:bg-red-500 '>LEARN MORE</button>
                </div>
              </div>
            </div>
          </div>
          </div>
        </>
    )
}

export default Header;