import { AiOutlineArrowRight } from "react-icons/ai";


const PraimaryButton = ( ) => {
    return (
        <div className="">
            <div className="flex gap-5 justify-center items-center bg-orange-600 p-2 rounded-3xl w-40">
                <h1 className="text-xl font-semibold">See More</h1>
                <p><AiOutlineArrowRight /></p>
            </div>
        </div>
    );
};

export default PraimaryButton;