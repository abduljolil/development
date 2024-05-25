import { AiOutlineArrowRight } from "react-icons/ai";


const PraimaryButton = ({title} ) => {
    return (
        <div className=" py-6">
            <div className="flex gap-5 justify-center items-center bg-orange-500 py-3 px-5  rounded-3xl font-Roboto font-bold text-3xl text-white w-56">
                <h1 className="text-xl font-semibold">{title}</h1>
                <p><AiOutlineArrowRight /></p>
            </div>
        </div>
    );
};

export default PraimaryButton;