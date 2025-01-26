//import React, {useEffect} from 'react';
import React, { useState } from "react";
import axios from "axios";

const LoginPage = () => {
    const [userName, setUsername] = useState("");
    const getUserName= async (e) => {
        e.preventDefault(); // prevents reloading the page
        const testingDB = async () => {
            try {
                const patientData = {
                    username: userName,
                };
                const response = await axios.post("http://localhost:3001/api/users/getUsername", patientData);
                console.log("Raw response from backend:", response.data);

            } catch (error) {
                console.error("Error registering user:", error.message);
                alert("Registration failed. Please try again.");
            }
        };

        testingDB();
    };
    return(
        <div className="">
            <div>
                <div>

                </div>
                <h1 class="text-5xl font-bold">
                    <span class="text-black">arch</span><span class="text-pink-600">ER</span>
                </h1>
                {/* Register Button */}
                <div className="flex flex-col items-center justify-center space-y-[20px] tb:space-y-[3%] mt-[40px] tb:mt-[8%]">
                    <div className="flex flex-col items-start justify-center space-y-[3px] ">
                        <label
                        htmlFor="username"
                        className="font-poppins font-normal text-[15px] tb:text-[0.95vw] text-[#0D2D7F]"
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
                    <button
                        className="justify-center p-1 w-[125px] tb:w-28 shadow rounded-2xl ph:text-[vw] tb:text-[1.15vw] font-poppins font-normal text-black"
                        onClick={getUserName}
                    >
                        submit username
                    </button>
                </div>
            </div>
            
        </div>
    );
};


export default LoginPage;