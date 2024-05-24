import { MdFacebook } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { FiX } from "react-icons/fi";


const SocialIcon = () => {
    return (
        <div className="flex justify-center items-center gap-3">
            <p className="text-2xl"><MdFacebook /></p>
            <p className="text-2xl bg-black text-white rounded-full "><FiX /></p>
            <p className="text-2xl "><FaLinkedin /></p>
        </div>
    );
};

export default SocialIcon;