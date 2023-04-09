import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const BookDetails = () => {
  const { authors, desc, image, price, publisher, rating, title, url, year } =
    useLoaderData();

  const [showFull, setShowFull] = useState(false);

  return (
    <div className="my-24 border flex flex-col xl:flex-row xl:items-center">
      <img src={image} alt={title} className="w-full lg:h-full" />
      <div className="p-8 lg:p-16 lg:pl-10 space-y-5 xl:w-1/2">
        <div className="space-y-3">
          <div className="bg-[#FACC15] text-[#295841] text-sm px-3 py-1 rounded-full w-fit font-semibold">
            BRAND NEW
          </div>
          <h1 className="text-3xl font-extrabold leading-none sm:text-4xl">
            {title}
          </h1>
          <div className="space-y-1">
            <p className="text-gray-900">Authors: {authors}</p>
            <p className="text-gray-900">Publisher: {publisher}</p>
            <p className="text-gray-900">Year: {year}</p>
            <p className="text-gray-900">Rating: {rating}</p>
          </div>
          {showFull ? (
            <p className="text-gray-800">
              {desc}
              <span
                onClick={() => setShowFull(!showFull)}
                className="cursor-pointer text-blue-600"
              >
                Read Less
              </span>
            </p>
          ) : (
            <p className="text-gray-800">
              {desc.substring(0, 100)}....
              <span
                onClick={() => setShowFull(!showFull)}
                className="cursor-pointer text-blue-600"
              >
                Read More
              </span>
            </p>
          )}
        </div>
        <div className="flex items-center gap-5">
          <div className="bg-[#60A5FA] px-6 py-3 text-lg font-bold text-white rounded-xl">
            <a href={url} target="_blank">
              Buy Now
            </a>
          </div>
          <h3 className="font-extrabold text-gray-600 text-lg">
            Price: {price}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
