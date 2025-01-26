import React, { useState } from "react";
import { useLocation } from 'react-router-dom';
import BodyPartPage from "./bodyPartPage";


function RightLegPage() {
    const location = useLocation();
    const patientName = location.state?.patient || {};
    const pid = location.state?.pid || {};
    const startStatus = location.state?.startStatus;
    console.log("rightLeg's patient IS: ", patientName);


    
    return(<div>
        
        <BodyPartPage bodyPart="right_leg" patientUserName={patientName} startStatus= {startStatus} pID={pid}/>
    </div>); 
    //showThread is boolean, and triggers threadpage when true
}

export default RightLegPage;
