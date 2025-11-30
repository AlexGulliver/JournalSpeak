// Journalling Render Component

import Timer from './Timer.tsx';

export default function Journal() {
    const time = new Date();
    time.setSeconds(time.getSeconds() + 1200);
    return (
      <div className="flex-col items-center justify-center bg-gray ">
        <div className="bg-black p-1 rounded col-1">
          <textarea
            placeholder="What are you unwilling to feel?"
            className="w-200 h-80 focus:outline-none focus:ring-5 focus:ring-amber-500 resize-none rounded"
          ></textarea>
        </div>
        <div>
            <Timer expiryTimestamp={time}/>
        </div>
      </div>
    );
  }
  