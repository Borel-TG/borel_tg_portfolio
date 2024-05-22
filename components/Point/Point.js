import React from "react";

function Point({ number = 1, label = "I am a point....", emojiCode = 0 }) {
  return (
    <div className="flex gap-3 items-start mb-3 lg:mb-5">
      <span className="p-5 text-xl rounded-full w-[20px] h-[20px] flex items-center justify-center bg-white/20">
        {number}
      </span>
      <p className="text-base lg:text-2xl text-black/60">
        {label}
        <span className="ms-1 text-black">
          {String.fromCodePoint(emojiCode)}
        </span>
      </p>
    </div>
  );
}

export default Point;
