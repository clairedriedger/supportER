import React from "react";
import { Link, useNavigate } from "react-router-dom";
import x_button from "../assets/x.png";
import question_mark from "../assets/question_mark_2.png";
import welcome from "../assets/welcome.png";

const WelcomePage = () => {
    const navigate = useNavigate(); // Initialize the navigate function

    return (
        <div className="bg-white h-screen w-screen flex flex-col">
            {/* Static Top Section */}
            <div className="relative h-[30%] bg-white">
                {/* For the x button */}
                <header className="absolute top-4 right-2">
                    <button
                        className="outline-none border-none shadow-none"
                        onClick={() => navigate("/login")} // Navigate back to bodyPartPage
                    >
                        <img
                            src={x_button}
                            alt="X button"
                            className="w-11 h-11 object-contain"
                        />
                    </button>
                </header>

                {/* For the welcome image */}
                <header className="absolute top-10 left-1/2 transform -translate-x-1/2 flex justify-center items-center border-none">
                    <img
                        src={welcome}
                        alt="Welcome image"
                        className="w-60 h-60 object-contain"
                    />
                </header>

                {/* For the welcome title */}
                <header className="absolute top-60 left-0 justify-between w-full px-1 py-2 bg-white">
                    <h1 className="text-bs">
                        <span className="text-black">Welcome to arch</span>
                        <span className="text-pink-600 font-bold">ER</span>
                        <span className="text-black">!</span>
                    </h1>
                </header>
            </div>

            {/* Scrollable Bottom Section */}
            <div className="flex-grow bg-white text-2xl overflow-y-scroll p-7" style={{ marginTop: "20%" }}>
                <p> Your ER experience, reimagined.
                </p>
                <br />

                <p> 
                    <span className="text-black">Here, you can pinpoint your </span>
                    <span className="text-pink-600">problem area </span>
                    <span className="text-black">on our </span>
                    <span className="text-pink-600">interactive body map</span>
                    <span className="text-black">, share your </span>
                    <span className="text-pink-600"> story</span>
                    <span className="text-black">, and connect with others who are also in the ER right now. Whether you're seeking support 
                    or offering encouragement, every interaction matters. Earn </span>
                    <span className="text-pink-600">points </span>
                    <span className="text-black">for spreading positivity—and 
                    let’s make the ER a little more human, together.</span>
                </p>
                <br />
                
                <p>
                    Start venting, connecting, and uplifting today!
                </p>
                <br />
                



                
            </div>
        </div>
    );
};

export default WelcomePage;
