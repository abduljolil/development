 
const TitleSection = ({title,drescription}) => {
    return (
        <div className=" ">
            <h1 className="text-6xl font-bold text-center">{title}</h1>
            <h3 className=" text-xl w-1/2 mx-auto text-center py-4  ">{drescription}</h3>
        </div>
    );
};

export default TitleSection;