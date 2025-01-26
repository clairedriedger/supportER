import React from 'react';
import { Link } from 'react-router-dom';
import right_arm from '../assets/right_arm.png';
import bandaid from '../assets/bandaid_inverted.svg';
import question_mark from '../assets/question_mark.png';
import back_arrow from '../assets/back_button.png';

const LandingPage = () => {
    return (
        <div>
            {/* Logo and Question Icon */}
            <header class="flex justify-between w-full px-4 py-2">
                <div></div> {/* Placeholder for alignment */}
                <Link to="..">
                    <button>
                        <img src={back_arrow} alt="Back arrow" class="w-3/4 h-3/4 object-cover rounded-2xl shadow-md" />
                    </button>
                </Link>
                <h1 class="text-5xl font-bold">
                    <span class="text-black">arch</span><span class="text-pink-600">ER</span>
                </h1>
                <button>
                    <img src={question_mark} alt="Question mark" class="w-3/4 h-3/4 object-cover rounded-2xl shadow-md" />
                </button>
            </header>

            {/* Central Image */}
            <main class="flex-grow flex items-center justify-center">
                <img src={right_arm} alt="Da Vinci" class="w-3/4 h-3/4 object-cover rounded-2xl shadow-md" />
                <a href="rightleg" class="absolute top-[2201px] left-[1031px] w-[685px] h-[748px] border-transparent" title="Right Leg"></a>
                <a href="leftleg" class="absolute top-[2201px] left-[391px] w-[639px] h-[746px] border-transparent" title="Left Leg"></a>
                <a href="body" class="absolute top-[1453px] left-[822px] w-[389px] h-[537px] border-transparent" title="Body"></a>
                <a href="leftarm" class="absolute top-[918px] left-[822px] w-[574px] h=[257px] border-transparent" title="Left Arm"></a>
                <a href="rightarm" class="absolute top-[1171px] left-[1211px] w-[602px] h=[256px] border-transparent" title="Right Arm"></a>
                <a href="head" class="absolute top-[916px] left-[675px] w-[818px] h=[501px] border-transparent" title="Head"></a>

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