import React from "react";
import x_button from "../assets/x.png";
import question_mark from "../assets/question_mark_2.png";

const InstructionsPage = () => {
    return (
        <div className="bg-gray-200 h-screen w-screen">
            {/* For the x button */}
            <header className="absolute top-4 right-2">
                <button className="outline-none border-none shadow-none">
                    <img
                        src={x_button}
                        alt="X button"
                        className="w-11 h-11 object-contain"
                    />
                </button>
            </header>

            {/* For the question mark image */}
            <header className="absolute top-21 left-1/2 transform -translate-x-1/2 flex justify-center items-center">
                <img
                    src={question_mark}
                    alt="Question mark"
                    className="w-11 h-11 object-contain"
                />
            </header>

            {/* For the instructions title */}
            <header className="absolute top-21 left-1/2 transform -translate-x-1/2 flex justify-center items-center">
                <img
                    src={question_mark}
                    alt="Question mark"
                    className="w-11 h-11 object-contain"
                />
            </header>

            <header className="absolute top-30 left-0 justify-between w-full px-1 py-2">
                <h1 className="text-sm">
                    <span className="text-black">Instructions</span>
                </h1>
            </header>

        </div>
    );
};

export default InstructionsPage;
