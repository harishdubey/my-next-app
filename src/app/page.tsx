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
      </ul>
    </div>
  );
}
