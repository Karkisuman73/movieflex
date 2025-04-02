import React from "react";

const Search = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <p className="text-3xl ">
          Welcome to MovieFlex
        </p>
        <input id="search" type="text" className="bg-gray-500 w-[70vw] py-3 px-7 rounded-4xl" placeholder="Search for movies, tv shows, etc.." />
      </div>
    </div>
  );
};

export default Search;
