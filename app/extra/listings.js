"use client";

import Link from "next/link";
import React from "react";

const listings = [
  {
    id: 1,
    image:
      "https://c3-global-bucket.s3.eu-west-2.amazonaws.com/wp-content/uploads/2022/06/airbng-new-1024x583.png",
    title: "Cozy Mountain Cabin",
    location: "Aspen, Colorado",
    price: 250,
  },
  {
    id: 2,
    image:
      "https://c3-global-bucket.s3.eu-west-2.amazonaws.com/wp-content/uploads/2022/06/airbng-new-1024x583.png",
    title: "Beachfront Villa",
    location: "Maui, Hawaii",
    price: 500,
  },
  {
    id: 3,
    image:
      "https://c3-global-bucket.s3.eu-west-2.amazonaws.com/wp-content/uploads/2022/06/airbng-new-1024x583.png",
    title: "Modern Loft",
    location: "Seattle, Washington",
    price: 150,
  },
  {
    id: 4,
    image:
      "https://c3-global-bucket.s3.eu-west-2.amazonaws.com/wp-content/uploads/2022/06/airbng-new-1024x583.png",
    title: "Rustic Farmhouse",
    location: "Napa, California",
    price: 300,
  },
  {
    id: 5,
    image:
      "https://c3-global-bucket.s3.eu-west-2.amazonaws.com/wp-content/uploads/2022/06/airbng-new-1024x583.png",
    title: "Treehouse Retreat",
    location: "Asheville, North Carolina",
    price: 225,
  },
  {
    id: 7,
    image:
      "https://c3-global-bucket.s3.eu-west-2.amazonaws.com/wp-content/uploads/2022/06/airbng-new-1024x583.png",
    title: "Cozy Mountain Cabin",
    location: "Aspen, Colorado",
    price: 250,
  },
  {
    id: 8,
    image:
      "https://c3-global-bucket.s3.eu-west-2.amazonaws.com/wp-content/uploads/2022/06/airbng-new-1024x583.png",
    title: "Beachfront Villa",
    location: "Maui, Hawaii",
    price: 500,
  },
  {
    id: 9,
    image:
      "https://c3-global-bucket.s3.eu-west-2.amazonaws.com/wp-content/uploads/2022/06/airbng-new-1024x583.png",
    title: "Modern Loft",
    location: "Seattle, Washington",
    price: 150,
  }
];

export default function Listings() {
  return (
    <div className="mt-40">
      <div className="flex justify-center space-x-4 mt-10 text-center h-20">
        <div className="w-1/5 bg-gray-200 p-4 rounded-lg flex flex-col items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/25/25694.png"
            alt="Properties"
            className="w-8 h-8 mb-2"
          />
          <span>Properties</span>
        </div>
        <div className="w-1/5 bg-gray-200 p-4 rounded-lg flex flex-col items-center">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/000/573/624/small/vector60-6774-01.jpg"
            alt="Map"
            className="w-8 h-8 mb-2"
          />
          <span>Map</span>
        </div>
        <div className="w-1/5 bg-gray-200 p-4 rounded-lg flex flex-col items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7oAV7YsWnkuVTNflOFxyxrJ7vxUzx9_fJHw&s"
            alt="Your Land"
            className="w-8 h-8 mb-2"
          />
          <span>Your Land</span>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 justify-center mt-10">
        {listings.map((listing) => (
          <div
            key={listing.id}
            className="w-[calc(25%-20px)] bg-white shadow-lg rounded-lg overflow-hidden mb-4"
          >
            <div className="relative" style={{ paddingTop: "56.25%" }}>
              <img
                src={listing.image}
                alt={listing.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold">{listing.title}</h3>
              <p className="text-gray-600">{listing.location}</p>
              <p className="text-gray-900 font-semibold">${listing.price}/night</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
