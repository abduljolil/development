import PraimaryButton from "../../Component/PraimaryButton";

 

const AboutUs = () => {
    return (
 
        <div className="flex justify-between">
   
    <img src="https://i.postimg.cc/vTkkvCdr/image-5.png" className="h-[700px] rounded-lg "  />
 
          <div className="">
            <h1 className="text-8xl font-bold pb-6  text-[#441355] font-Roboto">About Us</h1>
            <p className="py-7 text-3xl font-Alata ">Smart Vision for Consultancy and Development was <br /> incorporated in 2011 in Somalia.  We focus majorly on <br /> monitoring, evaluation, research and learning (MERL),<br /> institutional capacity development services, private<br /> sector development, quality infrastructure and trade <br /> facilitation, mainly in Somalia and across the greater <br /> Horn of Africa region. At Smart Vision, we are committed <br /> to professionalism and timely and quality service<br /> delivery. Smart Vision for Consultancy and Development<br /> was incorporated in 2011 in Somalia.At Smart Vision</p>
            <PraimaryButton title='Read More'></PraimaryButton>
          </div>
        </div>
       
   
    );
};

export default AboutUs;