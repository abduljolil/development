 

const TrackButton = ({title}) => {
    return (
        
       
            <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" /> 
            <div className="collapse-title text-3xl ">
               {title}
            </div>
            <div className="collapse-content"> 
                <p>hello</p>
            </div>
            </div>
             
                     
    );
};

export default TrackButton;