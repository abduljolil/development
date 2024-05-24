 

const TrackButton = ({title}) => {
    return (
        
       
            <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" /> 
            <div className="collapse-title text-xl font-medium">
               {title}
            </div>
            <div className="collapse-content"> 
                <p>hello</p>
            </div>
            </div>
             
                     
    );
};

export default TrackButton;