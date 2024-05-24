import PraimaryButton from "../../Component/PraimaryButton";
import TrackButton from "../../Component/TrackButton";

 

const TrackRecorde = () => {
    return (
        <div>
          <div className=" flex justify-center items-center gap-5">
          <div className="card  bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title text-5xl font-bold">Recent Track <br /> Records</h2>
                <p>Smart Vision for Consultancy and Development was incorporated in 2011 in Somalia. We focus majorly on monitoring, evaluation, research and learning (MERL).</p>
            </div>
            <figure><img className="py-5" src="https://i.postimg.cc/N0qkqyQZ/Group-859.png" alt="Shoes" /></figure>
          
            
            </div>
            <div className=" ">
                
            <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" /> 
            <div className="collapse-title text-xl font-medium">
         2011 Track Record 
            
            </div>
            
            </div>
            <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead className=" bg-[#441355] text-white">
                <tr>
                    <th>Status</th>
                    <th>Date</th>
                    <th>Role/project Title</th>
                    <th>Client</th>
                </tr>
                </thead>
                <tbody>
                {/* row 1 */}
                <tr className="bg-base-200">
                    <th>Completed</th>
                    <td>2011</td>
                    <td>Undertook a UNICEF-funded evaluation that aimed at documenting strengths, weaknesses, lessons learnt and drawing recommendations for consideration in the expansion of the project and future interventions, and to determine whether expected results had been achieved</td>
                    <td><img src="https://i.postimg.cc/k4ZGVpfZ/UNICEF-logo-1.png" alt="" /></td>
                </tr>
                <div className="divider divider-end"></div>
                {/* row 2 */}
                <tr className="bg-base-200">
                    <th>Completed</th>
                    <td>2011</td>
                    <td>Strengthening Somali Civil Society Organizations to Promote a Holistic Approach to Democracy and Human Rights that are Keys to Peace and Development. The aim of the assignment was to identify capacity gaps and provide training to build strengths of the organizations.</td>
               <td></td>
                </tr>
                 
                </tbody>
            </table>
            </div>
          <div className="">
          <TrackButton title='2012 Track Record'></TrackButton>
                <TrackButton title='2013 Track Record'></TrackButton>
                <TrackButton title='2014 Track Record'></TrackButton>
                <TrackButton title='2015 Track Record'></TrackButton>
          </div>
            </div>
          </div>
            <PraimaryButton ></PraimaryButton>
        </div>
    );
};

export default TrackRecorde;