import { image_url, images } from "@/public/images";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Card = ({ data, endpoint, index }) => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <Link
      href={
        (data?.media_type === "person" && "/") ||
        `/${
          endpoint ? endpoint : data?.media_type === "movie" ? "movie" : "tv"
        }/${data?.id}`
      }
    >
      <div className="w-50 h-auto  ">
        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{
            delay: (index % 21) * 0.15,
            ease: "easeInOut",
            duration: 0.5,
          }}
          className="relative group w-50 overflow-hidden aspect-[2/3]"
        >
          <Image
            className="object-cover w-full hover:opacity-10"
            src={
              data?.poster_path
                ? `${image_url}${data?.poster_path}`
                : images.noimage
            }
            alt="No image found"
            width={500}
            height={500}
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white p-4 text-center">
            <p className="overflow-y-auto max-h-full scrollbar-hide ">{data?.overview? data.overview:"no overview"}</p>
          </div>

        </motion.div>
        <div className="flex justify-center m-1.5">
          <p>{data?.title || data?.name}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
