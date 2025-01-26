import React from "react";
import x_button from "../assets/x.png"

const instructionsPage = () => {
    return(
        <div className="bg-gray-100">
            <p class="text-red-50">TEST TEST</p>

            {/* For the question x button */}
            <header className="absolute top-4 right-2 justify-between w-full px-1 py-2 bg-none">
                <button className="absolute right-0 outline-none border-none shadow-none">
                    <img
                        src={x_button}
                        alt="X button"
                        className="w-11 h-11 object-contain"
                    />
                </button>
            </header>

            

        </div>
    );

};
export default instructionsPage;