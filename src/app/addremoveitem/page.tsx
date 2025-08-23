"use client";

import Link from "next/link";
import { useRef, useState } from "react";

type UserListTypes = {
  id: number;
  name: string;
};

const AddRemoveComponent = () => {
  const [userList, setUserList] = useState<UserListTypes[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const inputRef = useRef<HTMLInputElement>(null);

  const addItem = () => {
    const newId =
      userList.length > 0
        ? Math.max(...userList.map((item) => item.id)) + 1
        : 1;
    setUserList([
      ...userList,
      {
        id: newId,
        name: inputValue,
      },
    ]);
    setInputValue("");
    inputRef.current?.focus();
  };
  const removeItem = (id: number) => {
    setUserList(userList.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h1>Add Remove</h1>
      <div>
        <Link href={"/"}>Back to Home</Link>
      </div>
      <div>
        <label htmlFor="inputField">Enter Value</label>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          id={"inputField"}
          ref={inputRef}
        />
        <button disabled={inputValue === ""} onClick={addItem}>
          Add
        </button>
      </div>
      <div>
        {userList.map((item) => {
          return (
            <div key={item.id}>
              {item.name}
              <button onClick={() => removeItem(item.id)}>Remove</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AddRemoveComponent;
