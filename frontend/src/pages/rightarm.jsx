import React from "react";
import { useLocation } from 'react-router-dom';
import BodyPartPage from "./bodyPartPage";

function RightArmPage() {
    const location = useLocation();
    const patientName = location.state?.patient || {};
    const pid = location.state?.pid || {};
    const startStatus = location.state?.startStatus;
    console.log("rightLeg's patient IS: ", patientName);

    return <BodyPartPage bodyPart="right_arm" patientUserName={patientName} startStatus= {startStatus} pID={pid}/>;
}

export default RightArmPage;
