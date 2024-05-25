 

const Navber = () => {
    const navlink = <>
        <li>Home</li>
        <li>About us</li>
        <li>Services</li>
        <li>Track Record</li>
        <li>Media</li>
        <li>Conacts</li>
</>

    return (
        <div className=" lg:py-2 px-10 ">
        <div className="navbar ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
                        {navlink}
                    </ul>
                </div>
               <img src="https://i.postimg.cc/KjXqLMND/Layer-1.png"  alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal  flex items-center gap-10 text-3xl font-medium font-Roboto">
                    {navlink}
                    <button className="bg-orange-500 py-3 px-5  rounded-3xl font-Roboto font-bold text-3xl text-white">Order Service</button>
                </ul>
              
            </div>
         
          
        </div>
    </div>
    );
};

export default Navber;