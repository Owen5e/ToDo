import React, { useEffect, useRef, useState } from "react";
import { FaCalendarCheck } from "react-icons/fa";
import TodoItems from "./TodoItems";

const Todo = () => {
  const [todos, setTodos] = useState(
    localStorage.getItem("myTodos")
      ? JSON.parse(localStorage.getItem("myTodos"))
      : []
  );
  const inputRef = useRef();

  const add = () => {
    const inputText = inputRef.current.value.trim();
    console.log(inputText);

    if (inputText === "") {
      return null;
    }

    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };
    setTodos((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  const toggle = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isComplete: !todo.isComplete };
        }
        return todo;
      });
    });
  };

  useEffect(() => {
    localStorage.setItem("myTodos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="place-self-center bg-white w-11/12 max-w-md rounded-xl shadow-lg flex flex-col min-h-[550px]  px-4">
      <div className="flex items-center mt-8 mb-4 space-x-2 font-medium">
        <FaCalendarCheck className="size-7" />
        <h1 className="text-3xl">To-Do List</h1>
      </div>
      <div className="flex justify-center items-center bg-gray-200 rounded-full mb-7 ">
        <input
          ref={inputRef}
          className="flex-1 bg-transparent placeholder:text-slate-600 placeholder:text-xl py-2 px-4 border-0 outline-none max-[380px]:w-3/4"
          type="text"
          placeholder="Enter to-do"
        />
        <button
          onClick={add}
          className="max-[380px]:w-1/4 bg-orange-500 rounded-full px-6 py-2 outline-none cursor-pointer"
        >
          ADD +
        </button>
      </div>
      <div className=" h-96 overflow-auto scrollbar-hide">
        {todos.map((todo, index) => {
          return (
            <TodoItems
              key={index}
              text={todo.text}
              id={todo.id}
              isComplete={todo.isComplete}
              deleteTodo={deleteTodo}
              toggle={toggle}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
