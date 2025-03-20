import React from "react";

export default function SideBar() {
  return (
    <div>
      {/* 모바일 */}
      <div className="sm:hidden fixed bottom-16 right-4 flex flex-col justify-start w-14">
        <div className="rounded-2xl bg-white shadow-custom h-52">
          <div className="flex justify-center items-center">
            <img src="/src/images/pin.png" alt="pin" className="w-10 h-10" />
          </div>
          <div className="flex flex-col justify-between items-center h-36 mt-2">
            <div className="flex justify-center items-center font-retro text-sm w-11 h-11 bg-gray-100 rounded-full border border-gray-200 hover:bg-gray-200 cursor-pointer">
              email
            </div>

            <div className="flex justify-center items-center font-retro text-sm w-11 h-11 bg-gray-100 rounded-full border border-gray-200 hover:bg-gray-200 cursor-pointer">
              phone
            </div>

            <div className="flex justify-center items-center font-retro text-sm w-11 h-11 bg-gray-100 rounded-full border border-gray-200 hover:bg-gray-200 cursor-pointer">
              gitHub
            </div>
          </div>
        </div>
      </div>
      {/* 그 외 */}
      <div className="hidden fixed bottom-32 right-14 sm:flex flex-col justify-start w-16 h-58 ">
        <div className="flex justify-center items-center">
          <img src="/src/images/pin.png" alt="pin" className="w-10 h-10" />
        </div>

        <div className="flex flex-col justify-between items-center rounded-2xl bg-white shadow-custom h-56 py-4">
          <div className="flex justify-center items-center font-retro text-md w-12 h-12 bg-gray-100 rounded-full border border-gray-200 hover:bg-gray-200 cursor-pointer">
            email
          </div>

          <div className="flex justify-center items-center font-retro text-md w-12 h-12 bg-gray-100 rounded-full border border-gray-200 hover:bg-gray-200 cursor-pointer">
            phone
          </div>

          <div className="flex justify-center items-center font-retro text-md w-12 h-12 bg-gray-100 rounded-full border border-gray-200 hover:bg-gray-200 cursor-pointer">
            gitHub
          </div>
        </div>
      </div>
    </div>
  );
}
