

const ThematicButton = ({img,title}) => {
    return (
        <div className="flex w-64  items-center bg-[#441355] py-2 rounded-3xl gap-4 p-1 text-white">
            <img className="bg-orange-600 p-2 rounded-full w-10 h-10" src={img} alt="" />
        <h1 className="text-xl font-semibold">{title}</h1>
            
        </div>
    );
};

export default ThematicButton;