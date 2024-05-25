 
const TitleSection = ({title,drescription}) => {
    return (
        <div className=" ">
            <h1 className="text-8xl font-bold text-center font-Roboto  text-[#441355]">{title}</h1>
            <h3 className=" text-3xl w-1/2 mx-auto text-center  py-8  ">{drescription}</h3>
        </div>
    );
};

export default TitleSection;