import React from "react";
import star from "../assets/images/star.png";

export default function Card({
  img,
  rating,
  reviewCount,
  country,
  title,
  price,
}) {
  return (
    <section className="space-y-3 pb-3 lg:max-w-sm">
      <div className="w-80 h-80 sm:w-80 sm:h-auto rounded-2xl relative">
        <div className="uppercase absolute z-30 bg-white rounded px-2 top-3 left-2">
          sold out
        </div>
        <img
          src={img}
          alt=""
          className="w-full h-full object-cover object-center rounded-2xl z-10"
        />
      </div>

      <div className="space-y-1">
        <div className="text-sm flex gap-1">
          <img src={star} alt="star" className="w-4 h-4 rounded-lg" />
          <span>{rating}</span>
          <span className="text-[#918E9B]">({reviewCount}) • </span>
          <span className="text-[#918E9B]">{country}</span>
        </div>
        <p className="text-sm lg:text-lg">{title}</p>
        <p className="text-sm lg:text-lg">
          <span className="font-bold">From ${price}</span> / person
        </p>
      </div>
    </section>
  );
}
