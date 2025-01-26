//import React, {useEffect} from 'react';
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'; // For navigation
import axios from "axios";

const LoginPage = () => {
    const [userName, setUsername] = useState("");
    const navigate = useNavigate();

    const getUserName= async (e) => {
        e.preventDefault(); // prevents reloading the page
        const testingDB = async () => {
            try {
                const patientData = {
                    username: userName,
                };
                const response = await axios.post("http://localhost:3001/api/users/getUsername", patientData);
                console.log("Raw response from backend:", response.data);
                console.log("i want the username", patientData);
                navigate("/body", { state: { patient: patientData.username, pid:patientData._id , isLogin: true} });

            } catch (error) {
                console.error("Error registering user:", error.message);
                alert("Registration failed. Please try again.");
            }
        };

        testingDB();
    };
    return(
        <div className="">
            <div className="space-y-[100px]">
                
                <h1 className="font-inria-sans text-5xl font-bold">
                    <span className="text-black">arch</span><span className="text-pink-600">ER</span>
                </h1>
                {/* Register Button */}
                <div className="flex flex-col items-center justify-center py-[30px] px-[50px] mx-[10px] bg-[#D9D9D9] rounded-[35px] space-y-[30px]">
                    <p className="text-justify font-semibold">
                        When creating a username, it's important to protect your privacy. 
                        Avoid using personal information such as your real name, birthdate, 
                        or any other identifying details. Instead, get creative! Choose something 
                        unique and fun that reflects your interests or personality without revealing 
                        too much about yourself.</p>
                    <div className="flex flex-col items-start justify-center space-y-[3px] ">
                        <label
                        htmlFor="username"
                        className="font-bold text-[15px] tb:text-[0.95vw] text-black"
                        >
                        Username
                        </label>
                        <input
                        type="username"
                        id="username"
                        value={userName}
                        onChange={(e) => setUsername(e.target.value)}
                        className="bg-[#FBFBFB] font-poppins shadow-[inset_0_2px_4px_0px_rgba(0,0,0,0.3)] rounded-md w-[275px] tb:w-72 h-[30px] tb:h-8"
                        />
                    </div>
                    <div
                        className="flex-col justify-center bg-[#E72854] rounded-[25px] p-1 w-[125px]  "
                        onClick={getUserName}
                    >
                        <p className="">submit username</p>
                    </div>
                </div>
            </div>
            
        </div>
    );
};


export default LoginPage;