"use client";
import { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";

type toDO = {
  id: number; // Or number, for a unique identifier
  text: string;
  completed: boolean;
};

const ToDoList = () => {
  const [toDoList, setToDoList] = useState<toDO[]>([]);
  const [inputValue, setInputValue] = useState("");

  const addItem = () => {
    if (inputValue.trim() !== "") {
      setToDoList([
        ...toDoList,
        { id: Date.now(), text: inputValue, completed: false },
      ]);
      setInputValue("");
    }
  };

  const deleteTodo = (id: number) => {
    setToDoList(toDoList.filter((item) => item.id !== id));
  };

  const toggleComplete = (id: number) => {
    setToDoList(
      toDoList.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div>
      <h1>To Do List</h1>
      {toDoList.length > 0 &&
        toDoList.map((toDo) => {
          return (
            <div key={toDo.id} className={styles.formatting}>
              <span
                onClick={() => toggleComplete(toDo.id)}
                className={toDo.completed ? styles.completed : ""}
              >
                {toDo && <>{toDo.text}</>}
              </span>
              <button onClick={() => deleteTodo(toDo.id)}>Delete</button>
            </div>
          );
        })}
      <div>
        {" "}
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button disabled={inputValue === ""} onClick={addItem}>
          Add Item
        </button>
      </div>
      <Link href="/">Back to Home</Link>
    </div>
  );
};

export default ToDoList;
