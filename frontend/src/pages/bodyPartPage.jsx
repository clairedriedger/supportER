import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import question_mark from "../assets/question_mark_2.png";
import bandaid from "../assets/bandaid_inverted.svg";
import ThreadCreationPage from "./threadPage";

// Import body parts images
import torso from "../assets/torso.png";
import head from "../assets/head.png";
import right_arm from "../assets/right_arm.png";
import left_arm from "../assets/left_arm.png";
import right_leg from "../assets/right_leg.png";
import left_leg from "../assets/left_leg.png";
import home_button from "../assets/home.png";
import dartImage from "../assets/arrow.png"; // Add the dart image

// Map body part names to their respective images
const bodyPartImages = {
    torso,
    head,
    right_arm,
    left_arm,
    right_leg,
    left_leg,
};

// Main body part page component
const BodyPartPage = ({ bodyPart, patientUserName, startStatus, pID }) => {
    const image = bodyPartImages[bodyPart]; // Get the image dynamically
    const [darts, setDarts] = useState([]);
    const [showThread, setShowThread] = useState(false);
    const navigate = useNavigate(); // Use navigate for routing

    console.log("startStatus is : ", startStatus);

    // Handle click on the body image to place a dart
    const handleImageClick = (e) => {
        const rect = e.target.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        setDarts([
            ...darts,
            { x, y, id: darts.length + 1 }, // Add a unique ID for each dart
        ]);
    };

    if (!image) {
        return (
            <div className="flex items-center justify-center h-screen">
                <p className="text-red-500 text-lg font-bold">
                    Invalid body part: {bodyPart}
                </p>
            </div>
        );
    }

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

            {/* Render body part image dynamically */}
            <main
                className="flex flex-grow items-center justify-center w-screen h-full relative"
                onClick={handleImageClick}
            >
                <img
                    src={image}
                    alt={bodyPart}
                    className="w-full h-full object-cover shadow-none"
                />
                {darts.map((dart) => (
                    <button
                        key={dart.id}
                        className="absolute p-0 m-0"
                        style={{
                            left: `${dart.x - 40}px`, // Adjust to center the dart
                            top: `${dart.y - 70}px`,  // Adjust to place the bottom-left corner at the click position (subtract dart height)
                            background: 'none',
                            border: 'none',
                            outline: 'none',
                        }}
                        onClick={() => navigate(`/dart/${dart.id}`)} // Redirect on click
                    >
                        <img
                            src={dartImage}
                            alt="dart"
                            className="w-15 h-15 object-contain"
                        />
                    </button>
                ))}
            </main>

            {/* Thread button */}
            {startStatus && (
                <div>
                    <button
                        onClick={() => setShowThread(true)}
                        className="bg-blue-500 text-black px-4 py-2 rounded-md"
                    >
                        Show Thread Page
                    </button>

                    {showThread && (
                        <ThreadCreationPage
                            patientname={patientUserName}
                            Pid={pID}
                        />
                    )}
                </div>
            )}

            {/* Footer */}
            <footer className="absolute bottom-0 left-0 w-full bg-gray-100 p-4 rounded-t-2xl shadow-md">
                <div className="flex justify-between items-center">
                    {/* Footer buttons */}
                    {/* Home button */}
                    <Link
                        to="/body"
                        state={{ patient: patientUserName, startStatus: false }}
                    >
                        <button>
                            <img
                                src={home_button}
                                alt="Home button"
                                className="w-11 h-11 object-contain"
                            />
                        </button>
                    </Link>

                    {/* Username text box */}
                    <text>username</text>

                    {/* Bandaid image */}
                    <div className="relative">
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
            </footer>
        </div>
    );
};

export default BodyPartPage;
