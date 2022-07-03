import { useState } from "react";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import parse from "html-react-parser";

const Add_document = () => {
  const [data, setData] = useState({
    title: "",
    content: "",
    category: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      
    } catch (error) {
      console.log(error);
    }
    e.preventDefault();
  }
  return (
    <div className="ml-[9rem] py-[4rem] pr-[5rem] space-y-4 h-screen text-center">
      <h1 className="font-bold text-xl">Create a News</h1>
      <input
        type="text"
        placeholder="Title"
        name="title"
        onChange={handleChange}
        className="placeholder-gray-400 border-gray-400 border-[1.5px] p-2 px-3 w-full focus:outline-none focus:border-violet-600 rounded-md"
      />
      <select
        name="category"
        defaultValue="--Select Category--"
        onChange={handleChange}
        className="placeholder-gray-400 border-gray-400 border-[1.5px] p-2 px-3 w-full focus:outline-none focus:border-violet-600 rounded-md"
      >
        <option value="--Select Category--" disabled>
          Select Category
        </option>
        <option value="Political">Political</option>
        <option value="Sports">Sports</option>
        <option value="Entertainment">Entertainment</option>
      </select>
      <CKEditor
        editor={ClassicEditor}
        data=""
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log("Editor is ready to use!", editor);
        }}
        onChange={(event, editor) => {
          setData((prev) => ({ ...prev, content: editor.getData() }));
          console.log({ event, editor, data });
        }}
      />
       <button
            type="submit"
            className="w-[8rem] bg-violet-700 p-2 rounded-md text-white focus:ring ring-violet-500 ring-offset-4"
            onClick={handleSubmit}
          >
            Create
          </button>
      {/* <div>
        <p>{parse(data.content)}</p>
      </div> */}
    </div>
  );
};

export default Add_document;
