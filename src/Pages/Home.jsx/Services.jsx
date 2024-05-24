import ServiceCard from "../../Component/ServiceCard";
import TitleSection from "../../Component/TitleSection";

import { AiOutlineFileDone } from "react-icons/ai";
import { IoPeople } from "react-icons/io5";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { IoChevronBackOutline } from "react-icons/io5";

import { IoChevronForwardOutline } from "react-icons/io5";





const Services = () => {
    return (
        <div>
            <TitleSection title='Our Services' drescription='Smart Vision for Consultancy and Development was incorporated in 2011 in Somalia. We 
         focus majorly on monitoring, evaluation, research and learning (MERL).'></TitleSection>
      <div className="  lg:flex justify-center items-center gap-4">
        <p className="text-3xl bg-red-500 p-7 rounded-full text-white"> <IoChevronBackOutline /></p>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 py-5">
         
         <ServiceCard img={<HiOutlineComputerDesktop />} title='Third Party  Monitoring'></ServiceCard>
         <ServiceCard img={<AiOutlineFileDone />} title='Midterm and endline Evaluations'></ServiceCard>
         <ServiceCard img={<IoPeople />} title='Baseline surveys'></ServiceCard>
      </div>
      <p className="text-3xl bg-red-500 p-7 rounded-full text-white"> <IoChevronForwardOutline /></p>
      </div>
        </div>
    );
};

export default Services;