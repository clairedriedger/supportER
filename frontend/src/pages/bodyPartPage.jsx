import React from "react";
import { Link } from "react-router-dom";
// import back_arrow from "../assets/back_button.png";
import question_mark from "../assets/question_mark_2.png";
import bandaid from "../assets/bandaid_inverted.svg";

// Import body parts images
import torso from "../assets/torso.png";
import head from "../assets/head.png";
import right_arm from "../assets/right_arm.png";
import left_arm from "../assets/left_arm.png";
import right_leg from "../assets/right_leg.png";
import left_leg from "../assets/left_leg.png";
import home_button from "../assets/home.png";

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

    // Handle invalid body parts
    if (!image) {
        return (
            <div className="flex items-center justify-center h-screen">
                <p className="text-red-500 text-lg font-bold">Invalid body part: {bodyPart}</p>
            </div>
        );
    }

    return (
        <div>
            {/* For the archER title */}
            <header className="absolute top-20 left-0 justify-between w-full px-1 py-2">
                {/* <Link to="..">
                    <button>
                        <img
                            src={back_arrow}
                            alt="Back arrow"
                            className="w-3/4 h-3/4 object-cover rounded-2xl shadow-md"
                        />
                    </button>
                </Link> */}
                <h1 className="text-10xl">
                    <span className="text-black">arch</span>
                    <span className="text-pink-600 font-bold">ER</span>
                </h1>
            </header>

            {/* For the question mark button */}
            <header className="absolute top-4 right-2 justify-between w-full px-1 py-2 bg-white">
                <button className="absolute right-0 outline-none border-none shadow-none">
                    <img
                        src={question_mark}
                        alt="Question mark"
                        className="w-11 h-11 object-contain"
                    />
                </button>
            </header>

            {/* Render body part image dynamically */}
            <main className="flex flex-grow items-center justify-center w-screen h-full">
                <img
                    src={image}
                    alt={bodyPart}
                    className="w-full h-full object-cover rounded-2xl shadow-none"
                />
            </main>

            {/* Footer */}
            <footer className="absolute bottom-0 left-0 w-full bg-gray-100 p-4 rounded-t-2xl shadow-md">
                <div className="flex justify-between items-center">
                    {/* Footer buttons */}

                    {/* Home button */}
                    <Link to="/body">
                        <button>
                            <img
                                src={home_button}
                                alt="Home button"
                                className="w-11 h-11 object-contain"
                            />
                        </button>
                    </Link>

                    {/* Username button
                    <button className="bg-pink-600 text-black py-2 px-4 rounded-full text-lg font-bold">
                        username
                    </button> */}

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
