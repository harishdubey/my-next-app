"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Home Page</h1>
      <ul>
        <li>
          <Link href="/login">Login</Link>
        </li>
        <li>
          <Link href="/about">About us</Link>
        </li>
        <li>
          <Link href="/studentList">Student List</Link>
        </li>
        <li>
          <Link href="/study">Study</Link>
        </li>
        <li>
          <Link href="/counter">Counter</Link>
        </li>
        <li>
          <Link href="/todolist">To Do List</Link>
        </li>
        <li>
          <Link href="/toggledarkmode">Toggle Dark Mode</Link>
        </li>
        <li>
          <Link href="/searchablelist">Searchable List</Link>
        </li>
        <li>
          <Link href="/stopwatch">Stopwatch</Link>
        </li>
        <li>
          <Link href="/fetchdata">Fetch Data</Link>
        </li>
        <li>
          <Link href="/tabs">Tabs</Link>
        </li>
        <li>
          <Link href="/dropdown">Dropdown</Link>
        </li>
      </ul>
    </div>
  );
}
