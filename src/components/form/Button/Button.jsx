import React from "react";

export const Button = ({value , click}) => {
    return(
         <>
             <div className="flex flex-wrap -mx-3 mt-6">
                 <div className="w-full px-3">
                     <button onClick={click} className="btn text-white bg-blue-600 hover:bg-blue-700 w-full">{value}</button>
                 </div>
             </div>
         </>
    )
}