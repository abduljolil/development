

const ThematicButton = ({img,title}) => {
    return (
        <div className="flex w-96   items-center bg-[#441355] py-5 rounded-3xl gap-4 p-2 text-white">
            <img className="bg-orange-600 p-2 rounded-full w-10 h-10" src={img} alt="" />
        <h1 className="text-4xl font-Roboto font-medium">{title}</h1>
            
        </div>
    );
};

export default ThematicButton;