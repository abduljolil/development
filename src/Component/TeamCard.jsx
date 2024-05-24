import SocialIcon from "./SocialIcon";

 

const TeamCard = () => (
    <div>
        <div className="relative card w-96 bg-base-200 shadow-xl">
            <figure className="px-10 pt-10">
                <div className="absolute -top-24">
                <img src="https://i.postimg.cc/wTFH7Z4j/Ellipse-50.png" alt="Shoes" className="w-40 h-40 rounded-full border-8  border-orange-600" />
                </div>
       </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Ismail Aden Haibe </h2>
                <p>Cheif Executive Officer</p>
                <div className="card-actions">
                    <SocialIcon></SocialIcon>
                </div>
            </div>
        </div>
    </div>
);

export default TeamCard;