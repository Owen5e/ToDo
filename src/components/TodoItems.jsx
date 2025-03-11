import React from "react";
import { FaRegCircle } from "react-icons/fa6";
import { FaRegCircleCheck } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";

const TodoItems = ({ text, id, isComplete, deleteTodo, toggle }) => {
  return (
    <div
      onClick={() => toggle(id)}
      className="flex items-center cursor-pointer py-1 font-semi-medium mb-2 mr-2 border-b border-gray-200"
    >
      <div className=" pr-4 ">
        {isComplete ? (
          <FaRegCircleCheck className="bg-green-700 rounded-full text-xl border-0" />
        ) : (
          <FaRegCircle />
        )}
      </div>
      <p
        className={` text-[17px] text-slate-700 decoration-slate-500 ${
          isComplete ? "line-through" : ""
        }`}
      >
        {text}
      </p>
      <div onClick={() => deleteTodo(id)} className="ml-auto cursor-pointer">
        <MdDelete />
      </div>
    </div>
  );
};

export default TodoItems;
