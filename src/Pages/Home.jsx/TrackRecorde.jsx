import PraimaryButton from "../../Component/PraimaryButton";
import TrackButton from "../../Component/TrackButton";

 

const TrackRecorde = () => {
    return (
        <div className="">
          <div className=" flex justify-center items-center gap-10">
          <div className=" bg-base-100 ">
            <div className="">
                <h2 className=" text-8xl font-bold font-Roboto text-[#441355]">Recent Track <br /> Records</h2>
                <p className="text-3xl py-6  font-Alata">Smart Vision for Consultancy and Development was incorporated in 2011 in Somalia. We focus majorly on monitoring, evaluation, research and learning (MERL).</p>
            </div>
            <figure><img className="" src="https://i.postimg.cc/N0qkqyQZ/Group-859.png" alt="Shoes" /></figure>
          
            
            </div>
            <div className=" ">
                
            <div className="collapse collapse-arrow bg-base-300">
            <input type="radio" name="my-accordion-2" /> 
            <div className="collapse-title text-3xl ">
         2011 Track Record 
            </div>  
            </div>
            <div className="overflow-x-auto rounded-lg  font-Alata">
            <table className="table">
                {/* head */}
                <thead className=" bg-[#441355]  font-Alata text-white text-xl">
                <tr>
                    <th>Status</th>
                    <th>Date</th>
                    <th>Role/project Title</th>
                    <th>Client</th>
                </tr>
                </thead>
                <tbody>
               
                {/* row 1 */}
                <tr className="bg-base-200 text-xl  font-Alata  ">
                    <th>Completed</th>
                    <td>2011</td>
                    <td className="text-base w-1/2  font-Alata">Undertook a UNICEF-funded evaluation that aimed at documenting strengths, weaknesses, lessons learnt and drawing recommendations for consideration in the expansion of the project and future interventions, and to determine whether expected results had been achieved</td>
                    <td><img src="https://i.postimg.cc/k4ZGVpfZ/UNICEF-logo-1.png" alt="" /></td>
                </tr>
        
                {/* row 2 */}
                <tr className="bg-base-200 text-xl  font-Alata">
                    <th>Completed</th>
                    <td>2011</td>
                    <td className="text-base w-1/2  font-Alata">Strengthening Somali Civil Society Organizations to Promote a Holistic Approach to Democracy and Human Rights that are Keys to Peace and Development. The aim of the assignment was to identify capacity gaps and provide training to build strengths of the organizations.</td>
               <td></td>
                </tr>
                 
                </tbody>
            </table>
            </div>
          <div className="space-y-4 pt-6">
          <TrackButton title='2012 Track Record'></TrackButton>
                <TrackButton title='2013 Track Record'></TrackButton>
                <TrackButton title='2014 Track Record'></TrackButton>
                <TrackButton title='2015 Track Record'></TrackButton>
          </div>
            </div>
          </div>
            <PraimaryButton title='Viwe More'></PraimaryButton>
        </div>
    );
};

export default TrackRecorde;