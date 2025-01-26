import React, { useState } from "react";
import axios from "axios";


const ThreadCreationPage = ({patientname, Pid}) => {
    const [threadTitle, setThreadTitle] = useState('');
    const [threadContent, setThreadContent] = useState('');
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());
    //const [userName, setUserName] = useState("JaneBroken");

    const createThread = async (e) => {
        e.preventDefault();
        try {
            console.log("this is the patientname: ", patientname);
            const threadData = {
                title: threadTitle,
                content: threadContent,
                //username: patientname,
                timestamp: currentTime,
            };
            const response = await axios.post("http://localhost:3001/api/threads/firstThread", threadData);
            console.log("Thread created:", response.data);
        } catch (error) {
            console.error("Error creating thread:", error.message);
            alert("Thread creation failed. Please try again.");
        }
    };



    return(
        <div className="z=10">
            <div className="space-y-[100px]">
                <h1 className="text-5xl font-bold">
                    <span className="text-black">arch</span><span className="text-pink-600">ER</span>
                </h1>
                <div className="flex flex-col items-center justify-center py-[30px] px-[50px] bg-[#D9D9D9] rounded-[35px] space-y-[30px] relative">
                    <div className="flex flex-col items-start justify-center space-y-[3px]">
                        <label
                        htmlFor="threadTitle"
                        className="font-poppins font-normal text-[15px] tb:text-[0.95vw] text-[#0D2D7F]"
                        >
                            Thread Title
                        </label>
                        <input
                        type="text"
                        id="threadTitle"
                        value={threadTitle}
                        onChange={(e) => setThreadTitle(e.target.value)}
                        className="bg-[#FBFBFB] font-poppins shadow-[inset_0_2px_4px_0px_rgba(0,0,0,0.3)] rounded-md w-[275px] tb:w-72 h-[30px] tb:h-8"
                        />
                    </div>
                    <div className="flex flex-col items-start justify-center space-y-[3px]">
                        <label
                        htmlFor="threadContent"
                        className="font-poppins font-normal text-[15px] tb:text-[0.95vw] text-[#0D2D7F]"
                        >
                            Content
                        </label>
                        <textarea
                        id="threadContent"
                        value={threadContent}
                        onChange={(e) => setThreadContent(e.target.value)}
                        className="bg-[#FBFBFB] font-poppins shadow-[inset_0_2px_4px_0px_rgba(0,0,0,0.3)] rounded-md w-[275px] tb:w-72 h-[150px] tb:h-[200px]"
                        />
                    </div>
                    <button
                        className="justify-center bg-black text-white p-1 w-[125px] tb:w-28 shadow rounded-2xl ph:text-[vw] tb:text-[1.15vw] font-poppins font-normal"
                        onClick={createThread}
                    >
                        Create Thread
                    </button>
                    <div className="absolute bottom-4 left-4 text-[#0D2D7F] font-poppins text-sm">
                        {patientname}
                    </div>
                    <div className="absolute bottom-4 right-4 text-gray-500 font-poppins text-sm">
                        {currentTime}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThreadCreationPage;