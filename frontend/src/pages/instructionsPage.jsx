import React from "react";
import { Link, useNavigate } from "react-router-dom";
import x_button from "../assets/x.png";
import question_mark from "../assets/question_mark_2.png";

const InstructionsPage = () => {
    const navigate = useNavigate(); // Initialize the navigate function

    return (
        <div className="bg-gray-200 h-screen w-screen flex flex-col">
            {/* Static Top Section */}
            <div className="relative h-[30%] bg-gray-200">
                {/* For the x button */}
                <header className="absolute top-4 right-2">
                    <button
                        className="outline-none border-none shadow-none"
                        onClick={() => navigate("/body")} // Navigate back to bodyPartPage
                    >
                        <img
                            src={x_button}
                            alt="X button"
                            className="w-11 h-11 object-contain"
                        />
                    </button>
                </header>

                {/* For the question mark image */}
                <header className="absolute top-18 left-1/2 transform -translate-x-1/2 flex justify-center items-center">
                    <img
                        src={question_mark}
                        alt="Question mark"
                        className="w-11 h-11 object-contain"
                    />
                </header>

                {/* For the instructions title */}
                <header className="absolute top-30 left-0 justify-between w-full px-1 py-2 bg-grey">
                    <h1 className="text-sm">
                        <span className="text-black">Instructions</span>
                    </h1>
                </header>
            </div>

            {/* Scrollable Bottom Section */}
            <div className="flex-grow bg-gray-200 text-xl overflow-y-scroll p-7" style={{ marginTop: "17%" }}>
                <p>
                    <strong>Share Your Story</strong><br />
                    Start by clicking on the part of the body related to your visit (e.g., the area of concern for your ER issue).
                </p>
                <br />
                <p>
                    <strong>Mark the Specific Area</strong><br />
                    Once zoomed in on the selected body part, click on the precise spot where you're experiencing an issue to place an arrow.
                </p>
                <br />
                <p>
                    <strong>Create Your Thread</strong><br />
                    Write about your issue in a new thread. Feel free to vent and share what you’re going through. Others will be able to see your story, comment, and connect with you.<br />
                    <em>Note:</em> You will remain anonymous, and everything you write will automatically be deleted after 4 hours.
                </p>
                <br />
                <p>
                    <strong>Explore Other Threads</strong><br />
                    Once your thread is created, you can click on the problem areas of other patients currently waiting in the ER to read their stories.
                </p>
                <br />
                <p>
                    <strong>Engage with Others</strong><br />
                    Comment on threads to show support or share your thoughts.
                </p>
                <br />
                <p>
                    <strong>Earn Points for Positivity</strong><br />
                    Receive points for positive and encouraging comments. Negative or disrespectful comments will result in losing points.
                </p>
                <br />
                <p>
                    <strong>Respect the Community Guidelines</strong><br />
                    Please remain respectful in all interactions. Disrespectful behavior will result in being removed from the website.
                </p>
                <br />

                <p>
                    <strong>
                        <span className="text-black">Inspiration Behind arch</span>
                        <span className="text-pink-600">ER</span>
                        </strong><br />
                    In psychology, "misery loves company" refers to the tendency
                     for people experiencing negative emotions like sadness or 
                     distress to seek out others who are also experiencing similar 
                     negative emotions, finding some comfort or validation in shared 
                     hardship; essentially, unhappy people may feel better knowing 
                     they aren't alone in their misery, leading them to gravitate 
                     towards others in similar situations.
                </p>

            </div>
        </div>
    );
};

export default InstructionsPage;
