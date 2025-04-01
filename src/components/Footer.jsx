import React from "react";

export default function Footer() {
  return (
    <div className="flex w-full justify-between items-center h-[30vh] bg-gray-300">
      <div className="flex flex-col justify-between  mx-8 sm:mx-32 h-[20vh]">
        <div className="text-md sm:text-lg font-bold">contact 24 Hours</div>
        <div className="text-sm">
          <div>tel: 010-7209-5811</div>
          <div>email: zzannorita@gmail.com</div>
          <div>github: https://github.com/zzannorita</div>
        </div>
        <div className="text-xs text-gray-900">
          2025 © zzannorita. All rights reserved.
        </div>
      </div>
    </div>
  );
}
