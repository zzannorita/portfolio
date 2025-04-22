import React from "react";

export default function SideBar() {
  const handleCopy = async (text, label) => {
    try {
      await navigator.clipboard.writeText(text);
      alert(`${label} 복사되었습니다! `);
    } catch {
      alert("복사실패");
    }
  };
  return (
    <div>
      {/* 모바일 */}
      <div className="sm:hidden fixed bottom-16 right-4 flex flex-col justify-start w-14 z-50">
        <div className="rounded-2xl bg-white shadow-custom h-52">
          <div className="flex justify-center items-center">
            <img src="images/pin.png" alt="pin" className="w-10 h-10" />
          </div>
          <div className="flex flex-col justify-between items-center h-36 mt-2">
            <button
              className="flex justify-center items-center font-retro text-sm w-11 h-11 bg-gray-100 rounded-full border border-gray-200 hover:bg-gray-200 cursor-pointer"
              onClick={() => handleCopy("zzannorita@gmail.com", "이메일이")}
            >
              email
            </button>

            <button
              className="flex justify-center items-center font-retro text-sm w-11 h-11 bg-gray-100 rounded-full border border-gray-200 hover:bg-gray-200 cursor-pointer"
              onClick={() => handleCopy("010-7209-5811", "전화번호가")}
            >
              phone
            </button>

            <button
              className="flex justify-center items-center font-retro text-sm w-11 h-11 bg-gray-100 rounded-full border border-gray-200 hover:bg-gray-200 cursor-pointer"
              onClick={() =>
                window.open(
                  "https://github.com/zzannorita",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              gitHub
            </button>
          </div>
        </div>
      </div>
      {/* 그 외 */}
      <div className="hidden fixed bottom-16 right-14 sm:flex flex-col justify-start w-16 h-58 z-50">
        <div className="flex justify-center items-center">
          <img src="images/pin.png" alt="pin" className="w-10 h-10" />
        </div>

        <div className="flex flex-col justify-between items-center rounded-2xl bg-white shadow-custom h-56 py-4">
          <button
            className="flex justify-center items-center font-retro text-md w-12 h-12 bg-gray-100 rounded-full border border-gray-200 hover:bg-gray-200 cursor-pointer"
            onClick={() => handleCopy("zzannorita@gmail.com", "이메일이")}
          >
            email
          </button>

          <button
            className="flex justify-center items-center font-retro text-md w-12 h-12 bg-gray-100 rounded-full border border-gray-200 hover:bg-gray-200 cursor-pointer"
            onClick={() => handleCopy("010-7209-5811", "전화번호가")}
          >
            phone
          </button>

          <button
            className="flex justify-center items-center font-retro text-md w-12 h-12 bg-gray-100 rounded-full border border-gray-200 hover:bg-gray-200 cursor-pointer"
            onClick={() =>
              window.open(
                "https://github.com/zzannorita",
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            gitHub
          </button>
        </div>
      </div>
    </div>
  );
}
