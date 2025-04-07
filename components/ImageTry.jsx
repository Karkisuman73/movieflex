"use client";
import Image from "next/image";
import React from "react";

const ProfileCard = ({ imageUrl, name }) => {
  return (
    <div className="flex flex-col items-center ">
      <div className="w-50 h-50 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden border-4 border-gray-300 shadow-lg">
       
      </div>
      <p className="mt-3 text-lg font-semibold text-gray-700">{name}</p>
    </div>
  );
};

export default ProfileCard;
