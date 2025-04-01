import React from "react";

export default function Header() {
  return (
    <header className="w-full border-b border-black-100 bg-white fixed z-50 top-0 px-4 shadow-custom">
      {/* 모바일 */}
      {/* 상단바 */}
      <div className="sm:hidden flex justify-between items-center max-w-screen-xl mx-auto pt-2">
        <div className="flex items-center">
          <a href="/" aria-label="home" className="flex items-center">
            <img src="/src/images/cd.gif" alt="logo" className="w-6 h-6 mr-2" />
            <h1 className="text-lg font-bold flex">zzannorita</h1>
          </a>
        </div>
        <div className="flex justify-between items-center">
          <img
            src="/src/images/moon.png"
            alt="light"
            className="w-3 h-3 mx-2"
          />
          <div className="text-xs  text-gray-800 ">sound on</div>
        </div>
      </div>
      {/* 메인헤더 */}
      <div className="sm:hidden flex justify-end items-center max-w-screen-xl mx-auto h-10">
        <nav>
          <ul className="flex space-x-6 text-sm px-2">
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

      {/* 그 외 */}
      {/* 상단바 */}
      <div className="hidden sm:flex justify-end max-w-screen-xl mx-auto pt-4 ">
        <div className="flex justify-between items-center w-20">
          <img src="/src/images/moon.png" alt="light" className="w-4 h-4" />
          <div className=" text-gray-800 text-sm">sound on</div>
        </div>
      </div>
      {/* 메인헤더 */}
      <div className="hidden sm:flex justify-between max-w-screen-xl mx-auto pb-2 ">
        <div className="flex justify-between items-center w-full h-8">
          <a href="/" aria-label="home" className="flex items-center">
            <img src="/src/images/cd.gif" alt="logo" className="w-8 h-8 mr-2" />
            <h1 className="text-xl font-bold flex ">zzannorita</h1>
          </a>
          <nav>
            <ul className="flex space-x-6 text-md">
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
