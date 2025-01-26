import React from "react";
import BodyPartPage from "./bodyPartPage";
import { useLocation } from 'react-router-dom';

function TorsoPage() {
    const location = useLocation();
    const patientName = location.state?.patient || {};
    const pid = location.state?.pid || {};
    const startStatus = location.state?.startStatus;
    console.log("rightLeg's patient IS: ", patientName);

    return <BodyPartPage bodyPart="torso" patientUserName={patientName} startStatus= {startStatus} pID={pid}/>;
}

export default TorsoPage;
