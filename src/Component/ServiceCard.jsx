

const ServiceCard = ({img,title}) => {
    return (
        <div className="card  bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
           <p className="text-5xl text-orange-700   rounded-full bg-base-300 p-7">{img}</p>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-3xl font-bold w-72">{title}</h2>
          
          <div className="card-actions">
            <button className="underline">See More</button>
          </div>
        </div>
      </div>
    );
};

export default ServiceCard;