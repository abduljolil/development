import SocialIcon from "./SocialIcon";

 

const TeamCard = ({img,title,description}) => (
    <div className="relative">
       <div className=" absolute -top-56 left-28 bg-orange-600 rounded-full w-56 h-56"></div>
        <div className="relative -top-28  bg-base-100 shadow-2xl border-2">
            <figure className="px-10 pt-10">
                <div className="absolute -top-24 left-32">
                <img src={img} alt="Shoes" className="w-48 h-48 rounded-full " />
                </div>
       </figure>
            <div className="card-body items-center text-center pt-20">
                <h2 className="card-title">{title}</h2>
                <p>{description} </p>
                <div className="card-actions">
                    <SocialIcon></SocialIcon>
                </div>
            </div>
        </div>
    </div>
);

export default TeamCard;