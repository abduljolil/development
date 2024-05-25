 

const Banner = () => {
    return (
        <div className="hero  ">
  <div className=" flex justify-center items-center  ">
  
    <div className=" w-1/2">
      <h1 className="text-7xl font-bold font-Roboto text-[#441355] ">A new frontier in research and development</h1>
      <p className="py-6 text-3xl font-Alata">Smart Vision for Consultancy and Development was incorporated in 2011 in Somalia. We focus majorly on monitoring, evaluation, research and learning (MERL), institutional capacity development services, private sector development, quality infrastructure and trade facilitation, mainly in Somalia and across the greater Horn of Africa region.</p>
      <button className="underline font-bold text-xl">See more</button>
    </div>
  <div className="w-1/2">
  <img src="https://i.postimg.cc/fyvW6qxr/Map-3-country-orange-1-1.png" className="w-full" />
  </div>
  </div>
</div>
    );
};

export default Banner;