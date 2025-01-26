import React from "react";
import { Link } from "react-router-dom";
import back_arrow from "../assets/back_button.png";
import question_mark from "../assets/question_mark.png";
import bandaid from "../assets/bandaid_inverted.svg";

// Import body parts images
import torso from "../assets/torso.png";
import head from "../assets/head.png";
import right_arm from "../assets/right_arm.png";
import left_arm from "../assets/left_arm.png";
import right_leg from "../assets/right_leg.png";
import left_leg from "../assets/left_leg.png";

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
const BodyPartPage = ({ bodyPart }) => {
    const image = bodyPartImages[bodyPart]; // Get the image dynamically

    // Handle invalid body parts gracefully
    if (!image) {
        return (
            <div className="flex items-center justify-center h-screen">
                <p className="text-red-500 text-lg font-bold">Invalid body part: {bodyPart}</p>
            </div>
        );
    }

    return (
        <div>
            <header className="flex justify-between w-full px-4 py-2">
                <Link to="..">
                    <button>
                        <img
                            src={back_arrow}
                            alt="Back arrow"
                            className="w-3/4 h-3/4 object-cover rounded-2xl shadow-md"
                        />
                    </button>
                </Link>
                <h1 className="text-5xl font-bold">
                    <span className="text-black">arch</span>
                    <span className="text-pink-600">ER</span>
                </h1>
                <button>
                    <img
                        src={question_mark}
                        alt="Question mark"
                        className="w-3/4 h-3/4 object-cover rounded-2xl shadow-md"
                    />
                </button>
            </header>

            {/* Render body part image dynamically */}
            <main className="flex-grow flex items-center justify-center">
                <img
                    src={image}
                    alt={bodyPart}
                    className="w-3/4 h-3/4 object-cover rounded-2xl shadow-md"
                />
            </main>

            {/* Footer */}
            <footer className="w-full bg-gray-100 p-4 rounded-t-2xl shadow-md">
                <div className="flex justify-between items-center">
                    {/* Footer buttons */}
                    <button className="flex flex-col items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-8 h-8 text-black"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 10l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                            />
                        </svg>
                    </button>
                    <button className="bg-pink-600 text-black py-2 px-4 rounded-full text-lg font-bold">
                        username
                    </button>
                    <div className="relative">
                        <button>
                            <img src={bandaid} alt="bandaid"></img>
                        </button>
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
