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
    <section className="space-y-3 p-8">
      <div>
        <img
          src={img}
          alt=""
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="space-y-1">
        <div className="text-sm flex gap-1">
          <img src={star} alt="star" className="w-4 h-4 rounded-lg" />
          <span>{rating}</span>
          <span className="text-[#918E9B]">({reviewCount}) • </span>
          <span className="text-[#918E9B]">{country}</span>
        </div>
        <p className="text-sm">{title}</p>
        <p className="text-sm">
          <span className="font-bold">From ${price}</span> / person
        </p>
      </div>
    </section>
  );
}
