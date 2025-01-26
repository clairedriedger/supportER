import React from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import davinci from '../assets/davinci.png';
import bandaid from '../assets/bandaid_inverted.svg';
import question_mark from '../assets/question_mark.png';


const LandingPage = ({ patientUserName }) => {
    const location = useLocation();
    const patientName = location.state?.patient || {};
    // const patientName = location.state?.patient || patientUserName; // Use prop as fallback
    const pid = location.state?.pid || {};
    const startStatus = location.state?.isLogin;
    console.log("PATIENT IS: ", patientName);
    console.log("isLogin IS: ", startStatus);

    const navigate = useNavigate(); // Initialize useNavigate

    return (
        <div>
            {/* For the archER title */}
            <header className="absolute top-20 left-0 justify-between w-full px-1 py-2">
                <h1 className="text-10xl">
                    <span className="text-black">arch</span>
                    <span className="text-pink-600 font-bold">ER</span>
                </h1>
            </header>

            {/* For the question mark button */}
            <header className="absolute top-4 right-2 justify-between w-full px-1 py-2 bg-white">
                <button
                    className="absolute right-0 outline-none border-none shadow-none"
                    onClick={() => navigate("/instructions")} // Navigate to InstructionsPage
                >
                    <img
                        src={question_mark}
                        alt="Question mark"
                        className="w-11 h-11 object-contain"
                    />
                </button>
            </header>

            {/* Central Image */}
            <main class="relative flex-grow flex items-center justify-center">
                <img src={davinci} alt="Da Vinci" class="w-3/4 h-3/4 object-cover rounded-2xl shadow-md" />
                <Link
                    to="/rightleg"
                    state={{ patient: patientName, pid: pid, startStatus: startStatus }}
                    className="absolute"
                    style={{
                        top: '50%',
                        left: '50%',
                        width: '20%',
                        height: '25%',
                    }}
                    title="Right Leg"
                ></Link>
                <Link
                    to="/leftleg"
                    state={{ patient: patientName, pid: pid, startStatus: startStatus }}
                    className="absolute"
                    style={{
                        top: '50%',
                        left: '30%',
                        width: '20%',
                        height: '25%',
                    }}
                    title="Left Leg"
                ></Link>
                <Link
                    to="/torso"
                    state={{ patient: patientName, pid: pid, startStatus: startStatus }}
                    className="absolute"
                    style={{
                        top: '33%',
                        left: '44%',
                        width: '12%',
                        height: '17.1%',
                    }}
                    title="Torso"
                ></Link>
                <Link
                    to="/leftarm"
                    state={{ patient: patientName, pid: pid, startStatus: startStatus }}
                    className="absolute"
                    style={{
                        top: '32%',
                        left: '21%',
                        width: '23%',
                        height: '10%',
                    }}
                    title="Torso"
                ></Link>
                <Link
                    to="/rightarm"
                    state={{ patient: patientName, pid: pid, startStatus: startStatus }}
                    className="absolute"
                    style={{
                        top: '32%',
                        left: '56%',
                        width: '24%',
                        height: '10%',
                    }}
                    title="Torso"
                ></Link>
                <Link
                    to="/head"
                    state={{ patient: patientName, pid: pid, startStatus: startStatus }}
                    className="absolute"
                    style={{
                        top: '18%',
                        left: '44%',
                        width: '12%',
                        height: '15%',
                    }}
                    title="Torso"
                ></Link>
            </main>

            {/* Footer Navigation */}
            <footer class="absolute bottom-0 left-0 w-full bg-gray-100 p-8 rounded-t-2xl shadow-md ">
                <div class="flex flex-row items-center">

                    {/* Footer */}
                    {/* <footer className="w-full bg-gray-100 p-4 rounded-t-2xl shadow-md "> */}
                    <div className="flex justify-center items-center">


                        {/* Username text box */}
                        <p>{patientUserName}</p>

                        {/* Bandaid image */}
                        <div className="absolute right-0 mr-[30px]">
                            <img
                                src={bandaid}
                                alt="bandaid"
                                className="w-11 h-11 object-contain" // Adjust size of the bandaid
                            />
                            <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-sm font-bold w-6 h-6 flex items-center justify-center rounded-full">
                                87
                            </span>
                        </div>

                    </div>
                    {/* </footer> */}

                </div>
            </footer>
        </div>
    );
};

export default LandingPage;