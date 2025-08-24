"use client";

import Link from "next/link";
import { useState } from "react";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setMessage("Form submitted successfully");
    } catch (error) {
      setMessage("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <h1>Submit Form</h1>
      <Link href={"/"}>Back to Home</Link>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>User Name : </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Email : </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <button disabled={loading} type="submit">
              {loading ? "Submitting" : "Submit"}
            </button>
          </div>
          <div>{message && <p>{message}</p>}</div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
