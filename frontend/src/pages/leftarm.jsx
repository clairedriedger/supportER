import React from "react";
import BodyPartPage from "./bodyPartPage";
import { useLocation } from 'react-router-dom';

function LeftArmPage() {
    const location = useLocation();
    const patientName = location.state?.patient || {};
    const pid = location.state?.pid || {};
    const startStatus = location.state?.startStatus;
    console.log("rightLeg's patient IS: ", patientName);

    return <BodyPartPage bodyPart="left_arm" patientUserName={patientName} startStatus= {startStatus} pID={pid}/>;
}

export default LeftArmPage;
