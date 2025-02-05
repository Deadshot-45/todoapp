import React, { useEffect, useState } from "react";
import ToDoList from "./ToDoList";
import { getLs } from "./Function";

const Content = () => {
  const [input, setinput] = useState("");
  const [checked, setChecked] = useState(false);
  const [todos, setTodos] = useState(() => {
    const storedTodos = getLs;
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  const completedTodo = (e) => {
    setChecked(e.target.checked);
  };
  
  useEffect(() => {
    document.getElementById("input-todo").style.border = "none";
    document.getElementById("error").innerText = "";
  }, [input]);
  const handleSubmit = () => {
    let todo = todos.find((todo) => {
      return todo.Todo === input.toLowerCase();
    });
    if (todo) {
      //   alert("Todo already exists");
      document.getElementById("input-todo").style.border = "2px solid red";
      document.getElementById("error").innerText = "Todo already exists";
    } else {
      setTodos([
        ...todos,
        { Todo: input.toLowerCase()},
      ]);
      setinput("");
    }
  };
  let handleInput = (e) => {
    setinput(e.target.value);
  };
  let handleDelete = (todo) => {
    setTodos(todos.filter((item) => item !== todo));
  };
  let handleEdit = (todo) => {
    setTodos(todos.filter((item) => item !== todo));
    setinput(todo.Todo);
  };

  return (
    <section className="bg-purple-400 min-h-[80dvh] py-4 px-6 w-[40%] flex flex-col gap-5 rounded-3xl">
      <h1 className="text-center font-bold text-xl">This is my Todo list</h1>
      <h1 className="font-bold text-lg">Add ToDo</h1>
      <article className="flex flex-col gap-3">
        <div className="flex flex-col">
          <input
            type="text"
            placeholder="Enter a task"
            id="input-todo"
            name="ToDo"
            value={input}
            onChange={handleInput}
            className="border py-1 px-4 rounded-3xl"
          />
          <span
            id="error"
            className="text-red-500 text-sm font-semibold italic tracking-wider"
          ></span>
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          disabled={input.length <= 3}
          className="bg-purple-600 text-white font-semibold py-2 rounded-3xl"
        >
          save
        </button>
      </article>

      <article className="flex- flex-col gap-10 text-white">
        <div className="flex gap-2 text-sm">
          <input
            type="checkbox"
            name="show"
            id="show"
            onClick={completedTodo}
            className="accent-red-500"
          />
          <h1>Show Finished</h1>
        </div>
        <h1 className="font-bold text-lg text-black py-4">ToDos</h1>
        <div className="w-2/3 flex flex-col gap-4">
          {todos &&
            todos.map((todo, index) => (
              <ToDoList
                key={index}
                todo={todo}
                handleDelete={() => handleDelete(todo)}
                handleEdit={() => handleEdit(todo)}
                checked={checked}
                todos={todos}
                setTodos={setTodos}
              />
            ))}
        </div>
      </article>
    </section>
  );
};

export default Content;
