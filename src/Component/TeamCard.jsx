import SocialIcon from "./SocialIcon";

 

const TeamCard = ({img,title,description}) => (
    <div>
        <div className="relative  bg-base-100 shadow-2xl border-2">
            <figure className="px-10 pt-10">
                <div className="absolute -top-24 right-16">
                <img src={img} alt="Shoes" className="w-40 h-40 rounded-full border-8  border-orange-600" />
                </div>
       </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions">
                    <SocialIcon></SocialIcon>
                </div>
            </div>
        </div>
    </div>
);

export default TeamCard;