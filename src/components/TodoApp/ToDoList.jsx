import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const ToDoList = ({
  todo,
  handleDelete,
  handleEdit,
  checked,
  todos,
  setTodos,
}) => {
  const [line, setline] = useState(false);
  let handleCheck = (e) => {
    setline(e.target.checked);
  };
  useEffect(()=>{
    setline(todo.isComplete = line)
    console.log(line);
  })

  useEffect(()=>{
    let index = todos.findIndex((item) => item.Todo === todo.Todo);
    if (index>=0) {
      let newTodo = todos;
      newTodo[index].isComplete = line;
      setTodos(newTodo);
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  },[line]);

  return (
    <>
      {(checked || !line && !todo.isComplete) && (
        <div className="flex justify-between">
          <div className="flex items-center justify-center">
            <input
              type="checkbox"
              name="check"
              id="check"
              checked={todo.isComplete}
              onClick={handleCheck}
              className="accent-red-500"
            />
            <span
              className={`ml-2 ${
                line || todo.isComplete ? "line-through" : ""
              }`}
            >
              {todo.Todo}
            </span>
          </div>
          <div className="flex gap-2 justify-center items-center text-lg h-8">
            <button
              className="bg-purple-600 rounded-lg px-3 py-2"
              onClick={handleEdit}
            >
              <FaEdit />
            </button>
            <button
              className="bg-purple-600 rounded-lg px-3 py-2"
              onClick={handleDelete}
            >
              <MdDelete />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ToDoList;
