import { useEffect } from "react";

const News_info = () => {
  useEffect(() => {
    console.log("News_info");
  }, []);
  return (
    <div className="flex flex-col p-[5rem] pt-[6rem] space-y-5">
      <h1 className="font-bold text-4xl">Hi</h1>
      <img
        src="../../images/kitten.png"
        alt="img"
        className="h-[25rem] w-[50rem]"
      />
      <div className="flex space-x-2 text-xs items-center">
        <p className="text-white bg-violet-600 p-[2px] px-[5px] rounded">
          Politics
        </p>
        <p className="text-gray-600">1 Jun, 2022</p>
      </div>
      <p className="text-justify">This is a content</p>
    </div>
  );
};

export default News_info;
