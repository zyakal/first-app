import { useState } from "react";

export default function TodoApp() {
  const [todo, setTodo] = useState(" ");
  const [todoList, setTodoList] = useState([]);
  const onChange = (e) => {
    setTodo(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (todo) {
      console.log(todo);
      setTodoList([todo, ...todoList]);
      //   setTodoList((preVal) => [todo, ...preVal]);

      setTodo("");
    }
  };

  return (
    <div>
      <h1>My Todo List</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="write your to do ..."
          value={todo}
          onChange={onChange}
        />
        <button>Add To do</button>
      </form>
      <ul>
        {todoList.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
