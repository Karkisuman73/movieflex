"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import useFetch from "@/utiles/useFetch";
import { useInView } from "react-intersection-observer";


const AllMovies = () => {
  const [old, setOld] = useState([]);
  const [page, setPage] = useState(1);
  const { data } = useFetch(`/discover/movie?page=${page}`);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (data && inView) {
      setOld((prev)=>[...prev, ...data?.results]);
      
      setPage((prev)=>prev + 1);
    } else {
      console.log("not shown");
    }
  }, [inView, data]);

  return (
    <div className=" grid grid-cols-2 gap-10 lg:grid lg:grid-cols-6 sm:grid sm:grid-cols-3">
    {old.map((result, i) => (
      <Card key={i} data={result} endpoint={"movie"} />
    ))}
    <button ref={ref} className="col-span-full">Load More</button>
  </div>
  );
};

export default AllMovies;
