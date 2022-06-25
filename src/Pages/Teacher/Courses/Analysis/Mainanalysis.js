import React, { useState } from "react";
import Analysis1 from "./Analysis1";
import Analysis2 from "./Analysis2";
import { useParams } from "react-router-dom";
function Mainanalysis() {
    const { id } = useParams();
    console.log(id);
    return (
    <div>
        {id==="CS302" && <Analysis1/>}
        {id==="CS306" && <Analysis2/>}
        
    </div>
  )
}

export default Mainanalysis