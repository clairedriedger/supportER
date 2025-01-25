import React from 'react';
import { Link } from 'react-router-dom';
import davinci from '../assets/davinci.png';
import bandaid from '../assets/bandaid_inverted.svg';
import question_mark from '../assets/question_mark.png';



const LandingPage = () => {
    return (
        <div>
            {/* Logo and Question Icon */}
            <header class="flex justify-between w-full px-4 py-2">
                <div></div> {/* Placeholder for alignment */}
                <h1 class="text-5xl font-bold">
                    <span class="text-black">arch</span><span class="text-pink-600">ER</span>
                </h1>
                <button>
                    <img src={question_mark} alt="Question mark" class="w-3/4 h-3/4 object-cover rounded-2xl shadow-md" />
                </button>
            </header>

            {/* Central Image */}
            <main class="relative flex-grow flex items-center justify-center">
                <img src={davinci} alt="Da Vinci" class="w-3/4 h-3/4 object-cover rounded-2xl shadow-md" />
                <Link
                    to="/rightleg"
                    className="absolute border border-black"
                    style={{
                        top: '50%',
                        left: '50%',
                        width: '20%',
                        height: '25%',
                    }}
                    title="Right Leg"
                ></Link>
                <Link
                    to="/leftleg"
                    className="absolute border border-black"
                    style={{
                        top: '50%',
                        left: '30%',
                        width: '20%',
                        height: '25%',
                    }}
                    title="Left Leg"
                ></Link>
                <Link
                    to="/torso"
                    className="absolute border border-black"
                    style={{
                        top: '33%',
                        left: '44%',
                        width: '12%',
                        height: '17.1%',
                    }}
                    title="Torso"
                ></Link>
                <Link
                    to="/leftarm"
                    className="absolute border border-black"
                    style={{
                        top: '32%',
                        left: '21%',
                        width: '23%',
                        height: '10%',
                    }}
                    title="Torso"
                ></Link>
                <Link
                    to="/rightarm"
                    className="absolute border border-black"
                    style={{
                        top: '32%',
                        left: '56%',
                        width: '24%',
                        height: '10%',
                    }}
                    title="Torso"
                ></Link>
                <Link
                    to="/head"
                    className="absolute border border-black"
                    style={{
                        top: '18%',
                        left: '44%',
                        width: '12%',
                        height: '15%',
                    }}
                    title="Torso"
                ></Link>
            </main>

            {/* Footer Navigation */}
            <footer class="w-full bg-gray-100 p-4 rounded-t-2xl shadow-md">
                <div class="flex justify-between items-center">
                    {/* Home Icon */}
                    <button class="flex flex-col items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                        </svg>
                    </button>

                    {/* Username button */}
                    <button class="bg-pink-600 text-black py-2 px-4 rounded-full text-lg font-bold">
                        username
                    </button>

                    {/* Bandage Icon with Counter */}
                    <div class="relative">
                        <button>
                            <img src={bandaid} alt="bandaid"></img>
                        </button>
                        <span class="absolute -top-2 -right-2 bg-pink-600 text-white text-sm font-bold w-6 h-6 flex items-center justify-center rounded-full">87</span>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;