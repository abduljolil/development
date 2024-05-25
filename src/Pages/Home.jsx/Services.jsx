import ServiceCard from "../../Component/ServiceCard";
 

import { AiOutlineFileDone } from "react-icons/ai";
import { IoPeople } from "react-icons/io5";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { IoChevronBackOutline } from "react-icons/io5";

import { IoChevronForwardOutline } from "react-icons/io5";
 




const Services = () => {
    return (
        <div>
   
        
        <div className=" ">
            <h1 className="text-8xl font-bold text-center font-Roboto text-[#441355]">Our Services</h1>
            <h3 className=" text-3xl   text-center  py-8  font-Alata ">Smart Vision for Consultancy and Development was incorporated in 2011 in Somalia. We <br />focus majorly on monitoring, evaluation, research and learning (MERL).</h3>
        </div>

      <div className="  lg:flex justify-between items-center gap-4">
        <p className="text-3xl bg-red-500 p-7 rounded-full text-white"> <IoChevronBackOutline /></p>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-5">
         
         <ServiceCard img={<HiOutlineComputerDesktop />} title='Third Party  Monitoring'></ServiceCard>
    
         <div className="relative -top-10 card w-[440px] h-[558px]  bg-base-100 shadow-2xl">
        <figure className=" px-10 pt-10">
           <p className="text-5xl shadow-blue-400 shadow-md text-orange-700 bg-base-200  rounded-full  p-7"><AiOutlineFileDone /></p>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-5xl font-bold py-5 font-Roboto text-[#441355] ">Midterm and <br /> endline Evaluations</h2>
          
          <div className="card-actions">
            < a className="underline text-3xl">See More</ a>
          </div>
        </div>
      </div>
         <ServiceCard img={<IoPeople />} title='Baseline surveys'></ServiceCard>
      </div>
      <p className="text-3xl bg-red-500 p-7 rounded-full text-white"> <IoChevronForwardOutline /></p>
      </div>
        </div>
    );
};

export default Services;