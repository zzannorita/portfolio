import React from 'react'

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      {/* 상단바 */}
      <div className="flex justify-between items-center px-4 py-2">
        <div className="text-black dark:text-white">다크모드</div>
        <div className="text-black dark:text-white">노래</div>
      </div>

      {/* 메인헤더 */}
      <div className="p-4">메인 헤더 영역</div>
      <button>버튼</button>
    </header>
  )
}
