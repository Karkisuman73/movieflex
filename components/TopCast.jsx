"use client";
import { image_url, images } from "@/public/images";
import Image from "next/image";
import React from "react";

const TopCast = ({ title, data }) => {
 

  return (
    <>
      {data?.length > 0 ? (
        <>
          <div className="ml-2 p-2 font-bold text-2xl"> {title}</div>

          <div className="flex flex-row overflow-scroll noscroll pl-6 ">
            <div className="flex flex-row  gap-4 justify-center">
              {data?.map((person, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden border-4 border-gray-300 shadow-lg">
                    <Image
                      className="w-full h-full object-cover"
                      src={
                        person?.profile_path
                          ? `${image_url}${person.profile_path}`
                          : images.user
                      }
                      alt={person.original_name || "No image"}
                      width={160}
                      height={160}
                    />
                  </div>
                  <p className="mt-3 text-lg font-semibold">
                    {person.original_name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default TopCast;
