

const ServiceCard = ({img,title}) => {
    return (
        <div className="card w-[440px] h-[558px]  bg-base-100 shadow-2xl">
        <figure className=" px-10 pt-10">
           <p className="text-5xl shadow-blue-400 shadow-md text-orange-700 bg-base-200  rounded-full  p-7">{img}</p>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-5xl font-bold font-Roboto text-[#441355] py-5 ">{title}</h2>
          
          <div className="card-actions">
            < a className="underline text-3xl">See More</ a>
          </div>
        </div>
      </div>
    );
};

export default ServiceCard;