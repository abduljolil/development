import ThematicButton from "../../Component/ThematicButton";
import TitleSection from "../../Component/TitleSection";
 




const Thematic = () => {
    return (
        <div>
               <TitleSection title='Thematic Areas' drescription='Smart Vision for Consultancy and Development was incorporated in 2011 in Somalia. We 
         focus majorly on monitoring, evaluation, research and learning (MERL).'></TitleSection>
            <div className="relative flex justify-center items-center">
             <div className="flex items-center">
             <div className="flex-col space-y-4">
                    <ThematicButton img='https://i.postimg.cc/MKpfFG5Y/Vector.png' title='Health'></ThematicButton>
                    <ThematicButton img='https://i.postimg.cc/cHG89MkK/Group.png' title='Education'></ThematicButton>
                    <ThematicButton img='https://i.postimg.cc/ydh3wg2L/Group-1.png' title='Education'></ThematicButton>
                    <ThematicButton img='https://i.postimg.cc/4yB73Cft/Group-2.png' title='Accountability'></ThematicButton>
                    <ThematicButton img='https://i.postimg.cc/zXxKzhvM/Group-3.png' title='Child Protection'></ThematicButton>
               
                
                </div>
                <img src="https://i.postimg.cc/FF8t5XKM/Group-917.png" className="h-72" alt="" />
             </div>
              <div className="flex items-center">
              <img src="https://i.postimg.cc/YqW5tDGh/Group-918.png" className="h-80" alt="" />
              <div className=" flex-col space-y-4">
                <ThematicButton img='https://i.postimg.cc/hGdd13sW/Group-4.png' title='Gender'></ThematicButton>
                    <ThematicButton img='https://i.postimg.cc/W1KZrPMw/Group-5.png' title='Business development'></ThematicButton>
                    <ThematicButton img='https://i.postimg.cc/fRkXJb0b/Group-6.png' title='Value chain Development'></ThematicButton>
                    <ThematicButton img='https://i.postimg.cc/sxs3t4L1/Group-7.png' title='Quality Infrastructure'></ThematicButton>
                    <ThematicButton img='https://i.postimg.cc/yxV3B6Hs/Vector-1.png' title='Nutrition'></ThematicButton>
                </div>
                
              </div>
       
      
            <div className="absolute   shadow-2xl rounded-full p-6">
            <img src="https://i.postimg.cc/KjXqLMND/Layer-1.png" alt="" className="w-44"  />
            </div>
            </div>
            </div>
         
    );
};

export default Thematic;