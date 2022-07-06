import React from "react";

const News_overview = ({ title, category, date, img }) => {
  return (
    <div>
      <div className="flex flex-col space-y-2 ">
        <img src={img} alt="img" className="md:h-[10rem] md:w-[20rem] w-[25rem]" />
        <h1 className="font-bold text-lg text-justify">{`${title.substring(0, 33)} ...`}</h1>
        <div className="flex space-x-2 text-xs items-center">
          <p className="text-white bg-violet-600 p-[2px] px-[5px] rounded">
            {category}
          </p>
          <p className="text-gray-600">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default News_overview;
