"use client";
import { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";

const ResponsiveNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <div>
      <h1 className={styles.heading}>Responsive Nav Bar</h1>
      <div className={styles.navbar}>
        <div className={styles.navContainer}>
          <div className={styles.logo}>Logo</div>
          <div
            className={`${styles.hamburger} ${isOpen ? styles.open : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className={`${styles.navLinks}  ${isOpen ? styles.active : ""}`}>
            <li>
              <Link href={"/"}>Menu 1</Link>
            </li>
            <li>
              <Link href={"/"}>Menu 2</Link>
            </li>
            <li>
              <Link href={"/"}>Menu 3</Link>
            </li>
            <li>
              <Link href={"/"}>Menu 4</Link>
            </li>
            <li>
              <Link href={"/"}>Menu 5</Link>
            </li>
            <li>
              <Link href={"/"}>Menu 6</Link>
            </li>
          </ul>
        </div>
      </div>
      <Link href={"/"}>Back to Home</Link>
    </div>
  );
};

export default ResponsiveNavbar;
