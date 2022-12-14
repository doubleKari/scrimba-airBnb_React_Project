import React from "react";

export default function Card({ img, rating, caption, fee, number }) {
  return (
    <div className="space-y-1">
      <div className="">
        <img
          src={img}
          alt="Woman in swimsuit"
          className="rounded-lg w-full h-full object-cover object-center "
        />
      </div>
      <div className="flex items-center space-x-1">
        <img
          src={require("../assets/images/star.png")}
          alt="star"
          className="w-4 h-4"
        />
        <span> {rating}</span>
        <span className="text-[#918E9B]"> ({number})</span>
        <span className="text-[#918E9B]">&bull; USA</span>
      </div>
      <p>{caption}</p>
      <p>
        <span className="font-bold">From {fee}</span> / person
      </p>
    </div>
  );
}
