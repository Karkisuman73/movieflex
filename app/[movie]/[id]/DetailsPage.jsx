"use client";

import CardGrid from "@/components/CardGrid";
import TopCast from "@/components/TopCast";
import { image_url } from "@/public/images";
import useFetch from "@/utiles/useFetch";
import Image from "next/image";
import React from "react";

const DetailsPage = ({ movie, Id }) => {
  const { data } = useFetch(`/${movie}/${Id}`);
  const { data: recomended } = useFetch(`/${movie}/${Id}/recommendations`);
  const { data: similar } = useFetch(`/${movie}/${Id}/similar`);
  const { data: Topcast } = useFetch(`/${movie}/${Id}/credits`);
  
  return (
    <>
      <div className="">
        {/* background Image */}
        <div className="w-screen h-screen fixed inset-0 opacity-30 -z-50 ">
          <Image
            src={`${image_url}${data?.backdrop_path}`}
            className="w-full h-full "
            alt="background"
            width={500}
            height={500}
          />
        </div>

        {/* Image and content */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-10  ">
          {/* Image */}
          <div className="w-80 h-auto ">
            <div className="">
              <Image
                src={`${image_url}${data?.poster_path}`}
                className="w-80 h-100"
                alt="photo"
                width={500}
                height={500}
              />
            </div>

          </div>

          <div>
            
            {/* title */}
            <div className="text-3xl font-bold flex justify-center mt-3">
              {data?.original_title || data?.original_name}
            </div>
            {/* Overview */}
            <div className="flex justify-center items-center font-semibold italic">
              {data?.tagline}
            </div>
            <div className="border-1 rounded-2xl p-3 overflow-hidden w-[90vw] sm:w-[40vw] mt-4">
              <p className="text-3xl font-semibold">Overview</p>
             <span className="italic">{data?.overview}</span>
            </div>
            <div>
              {/* runtime... */}
             {movie==="movie"? <>
              <div className="flex justify-center  p-4 gap-10 ">
                <div>Status: {data?.status} </div>
                <div> Released Date: {data?.release_date}</div>
                <div> Runtime: {data?.runtime} min</div>
              </div> <hr className="opacity-50 -mt-3" />
             </>:
             <>
             <div className="flex justify-center  p-4 gap-10 ">
                <div>Status: {data?.status} </div>
                <div> Released Date: {data?.first_air_date}</div>
                <div> No of Seasons: {data?.number_of_seasons}</div>
              </div> <hr className="opacity-50 -mt-3" />
             </>}
            </div>

            <div className="flex ml-8  gap-4 mt-3">
              Genres:
              {data?.genres?.map((genre) => (
                <span key={genre.id}>{genre.name}</span>
              ))}
            </div> <hr className="opacity-50 mt-1" />
          </div>
        </div>
      </div>
      {/* {JSON.stringify(recomended)} */}
     <div className="mt-15 ">
       <div className="ml-2 p-2 font-bold text-2xl"> Recommendation</div><CardGrid  data={recomended} endpoint={movie}/>
        <div className="ml-2 p-2 font-bold text-2xl">Similar</div><CardGrid  data={similar} endpoint={movie} />
        <TopCast title={"TopCast"} data={Topcast?.cast} />
     </div>
    </>
  );
};

export default DetailsPage;
