import React from "react";

export default function Header() {
  const handleScroll = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "top" });
  };
  return (
    <header className="w-full border-b border-black-100 bg-white fixed z-50 top-0 px-4 shadow-custom">
      {/* 모바일 */}
      {/* 상단바 */}
      <div className="sm:hidden flex justify-between items-center max-w-screen-xl mx-auto pt-2">
        <div className="flex items-center">
          <a href="/" aria-label="home" className="flex items-center">
            <img src="images/cd.gif" alt="logo" className="w-6 h-6 mr-2" />
            <h1 className="text-lg font-bold flex">zzannorita</h1>
          </a>
        </div>
        <div className="flex justify-between items-center">
          <img src="images/moon.png" alt="light" className="w-3 h-3 mx-2" />
          <div className="text-xs  text-gray-800 ">sound on</div>
        </div>
      </div>
      {/* 메인헤더 */}
      <div className="sm:hidden flex justify-end items-center max-w-screen-xl mx-auto h-10">
        <nav>
          <ul className="flex space-x-6 text-sm px-2">
            <li>
              <button
                onClick={() => handleScroll("home")}
                className="hover:text-gray-400"
              >
                홈
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll("about")}
                className="hover:text-gray-400"
              >
                대하여여
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll("skills")}
                className="hover:text-gray-400"
              >
                기술술
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll("projects")}
                className="hover:text-gray-400"
              >
                프로젝트트
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* 그 외 */}
      {/* 상단바 */}
      <div className="hidden sm:flex justify-end max-w-screen-xl mx-auto pt-4 ">
        <div className="flex justify-between items-center w-20">
          <img src="images/moon.png" alt="light" className="w-4 h-4" />
          <div className=" text-gray-800 text-sm">sound on</div>
        </div>
      </div>
      {/* 메인헤더 */}
      <div className="hidden sm:flex justify-between max-w-screen-xl mx-auto pb-2 ">
        <div className="flex justify-between items-center w-full h-8">
          <a href="/" aria-label="home" className="flex items-center">
            <img src="images/cd.gif" alt="logo" className="w-8 h-8 mr-2" />
            <h1 className="text-xl font-bold flex ">zzannorita</h1>
          </a>
          <nav>
            <ul className="flex space-x-6 text-md">
              <li>
                <button
                  onClick={() => handleScroll("home")}
                  className="hover:text-gray-400"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll("about")}
                  className="hover:text-gray-400"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll("skills")}
                  className="hover:text-gray-400"
                >
                  Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll("projects")}
                  className="hover:text-gray-400"
                >
                  Projects
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
