"use client";

import Link from "next/link";
import React, { useState } from "react";
import styles from "./page.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );
  const [success, setSuccess] = useState("");

  const validate = () => {
    let newErrors: { email?: string; password?: string } = {};
    if (!email) {
      newErrors.email = "Email is Required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is Not Valid";
    }
    if (!password) {
      newErrors.password = "Password is Required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess("");
    if (validate()) {
      setSuccess("Login Successfully");
      console.log(email, password, "email, password");
    }
  };

  return (
    <div className={styles.loginForm}>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.formRow}>
          <label htmlFor="email">Email: </label>
          <input
            id="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className={styles.error}>{errors.email && errors.email}</div>
        </div>
        <div className={styles.formRow}>
          <label htmlFor="password">Password: </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className={styles.error}>
            {errors.password && errors.password}
          </div>
        </div>
        <div className={styles.formRow}>
          <button type="submit">Login</button>
        </div>
      </form>
      {success && (
        <div className={styles.successRow}>
          <p>{success}</p>
        </div>
      )}
      <Link href="/">Back to Home</Link>
    </div>
  );
};

export default Login;
