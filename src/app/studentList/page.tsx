"use client";
import Link from "next/link";

const students = [
  {
    id: "1",
    name: "Harish",
  },
  {
    id: "2",
    name: "Sunil",
  },
  {
    id: "3",
    name: "Mukesh",
  },
  {
    id: "4",
    name: "Rahul",
  },
  {
    id: "5",
    name: "Monu",
  },
  {
    id: "6",
    name: "Suresh",
  },
];
export default function StudentList() {
  return (
    <div>
      <h1>Student List</h1>
      <ul>
        {students.map((item) => {
          return (
            <li>
              <Link href={`/studentList/${item.name}`}> {item.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
