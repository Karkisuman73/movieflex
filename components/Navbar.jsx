"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Navbar = ({ setActive }) => {
  const router=useRouter();
  const [searchdata, setSearchdata] = useState("");
  const handleData = () => {
    if (searchdata.trim()) {
      router.push(`/search?query=${encodeURIComponent(searchdata)}`);
    }
  };
  return (
    <div className="flex justify-between p-4">
      <Link href={"/"}>
        <div className="text-2xl font-bold">
          <button> MovieFlex</button>
        </div>
      </Link>
      <div className="flex gap-x-4">
        <Link href={"/explore/movies"}>
          <button>Movies</button>
        </Link>
        <Link href={"/explore/tvshows"}>
          <button>TV shows</button>
        </Link>
        <div>
          <input
            type="text"
            placeholder="search..."
            value={searchdata}
            onChange={(e) => setSearchdata(e.target.value)}
            onKeyDown={(e)=>{
             if (e.key==="Enter"){
              handleData();
             }
            //  else{
            //   router.push("/")
            //  }
            }}
          />
         
        </div>
      </div>
    </div>
  );
};

export default Navbar;
