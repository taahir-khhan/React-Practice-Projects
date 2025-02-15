import React, { useState } from "react";

function Tabs({ tabsContent }) {
  const [currentTabIndex, SetCurrentTabIndex] = useState(0);

  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <div className='w-[700px] bg-indigo-500 py-10 rounded-lg text-center'>
        <div className='w-full flex gap-x-4 items-center justify-center'>
          {tabsContent.map((tabItem, idx) => (
            <div
              className={`py-2 px-4 text-xl font-medium  border-2 w-[200px] cursor-pointer ${
                currentTabIndex === idx ? "bg-white text-black border-none" : ""
              }`}
              onClick={() => SetCurrentTabIndex(idx)}
              key={tabItem.label}
            >
              {tabItem.label}
            </div>
          ))}
        </div>
        <div className='mt-10 text-2xl font-medium'>
          {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
        </div>
      </div>
    </div>
  );
}

export default Tabs;
