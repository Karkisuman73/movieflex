"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Search = () => {
  const router = useRouter();
  const [searchdata, setSearchdata] = useState("");

  const handleChange = (event) => {
    setSearchdata(event.target.value);
  };

  const handleKeyDown=(e) => {
    if (e.key ==="Enter") {
      handleData();
    }
  };

  const handleData = () => {
    if (searchdata.trim()) {
      router.push(`/search?query=${encodeURIComponent(searchdata)}`);
    }
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-4 ">
        <p className="text-4xl font-bold">Welcome to MovieFlex</p>
        <div className="flex gap-2">
          <input
            id="search"
            type="text"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            value={searchdata}
            className="bg-gray-500 text-white w-[60vw] py-3 px-5 rounded-2xl outline-none"
            placeholder="Search for movies, TV shows, etc..."
          />
          <button
            onClick={handleData}
            className="bg-blue-600 text-white px-5 py-2 rounded-2xl hover:bg-blue-700 transition"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
