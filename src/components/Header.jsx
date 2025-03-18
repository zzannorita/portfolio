import React from "react";

export default function Header() {
  return (
    <header className="w-full border-b border-black-100 bg-white">
      {/* 상단바 */}
      <div className="flex justify-end max-w-screen-xl mx-auto pt-4 ">
        <div className="flex justify-between w-24">
          <img src="/src/images/sun.png" alt="light" className="w-6 h-6" />
          <div className="font-retro text-gray-800">sound on</div>
        </div>
      </div>

      {/* 메인헤더 */}
      <div className="flex justify-between max-w-screen-xl mx-auto py-2 ">
        <div className="flex justify-between items-start w-full h-10">
          <a href="/" aria-label="home" className="flex">
            <img
              src="/src/images/silverStar.gif"
              alt="logo"
              className="w-8 h-8"
            />
            <h1 className="text-2xl font-bold flex font-retro">zzannorita</h1>
          </a>
          <nav>
            <ul className="flex space-x-6 font-retro text-lg">
              <li>
                <a href="#Home" className="hover:text-yellow-500">
                  Home
                </a>
              </li>
              <li>
                <a href="#About" className="hover:text-yellow-500">
                  About
                </a>
              </li>
              <li>
                <a href="#Skills" className="hover:text-yellow-500">
                  Skills
                </a>
              </li>
              <li>
                <a href="#Projects" className="hover:text-yellow-500">
                  Projects
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
