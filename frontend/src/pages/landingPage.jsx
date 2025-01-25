import React from 'react';
import { Link } from 'react-router-dom';
import davinci from '../assets/davinci.png';


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
                </button>
            </header>

            {/* Central Image */}
            <main class="flex-grow flex items-center justify-center">
                <img src={davinci} alt="Da Vinci" class="w-3/4 h-3/4 object-cover rounded-2xl shadow-md" />
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
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.11 0-2 .89-2 2 0 1.1.89 2 2 2s2-.9 2-2-.89-2-2-2z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.64 5.64a9 9 0 1112.72 12.72A9 9 0 015.64 5.64z" />
                            </svg>
                        </button>
                        <span class="absolute -top-2 -right-2 bg-pink-600 text-white text-sm font-bold w-6 h-6 flex items-center justify-center rounded-full">87</span>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
