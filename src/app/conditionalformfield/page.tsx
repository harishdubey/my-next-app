"use client";

import Link from "next/link";
import { useState } from "react";

type formType = {
  userType: string;
  businessName: string;
  personalEmail: string;
};

type InputChangeEvent =
  | React.ChangeEvent<HTMLSelectElement>
  | React.ChangeEvent<HTMLInputElement>;
type FormChangeEvent = React.FormEvent<HTMLFormElement>;

const ConditionalForm = () => {
  const [formData, setFormData] = useState<formType>({
    userType: "",
    businessName: "",
    personalEmail: "",
  });
  const handleSubmit = (e: FormChangeEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Add form submission logic here
  };

  const handleChange = (e: InputChangeEvent) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      let updatedData = {
        ...prevData,
        [name]: value,
      };
      if (name === "userType") {
        if (value === "individual") {
          updatedData.businessName = "";
        }
        if (value === "business") {
          formData.personalEmail = "";
        }
      }

      return updatedData;
    });
  };

  return (
    <div>
      <h1>Conditional Form Component </h1>
      <form onSubmit={handleSubmit}>
        <div style={{ paddingBottom: "20px" }}>
          <label htmlFor="userType">User Type</label>
          <select
            id="userType"
            name="userType"
            value={formData.userType}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="individual">Individual</option>
            <option value="business">Business</option>
          </select>
        </div>
        {formData.userType === "individual" && (
          <div style={{ paddingBottom: "20px" }}>
            <label htmlFor="personalEmail">Personal Email</label>
            <input
              type="text"
              id="personalEmail"
              name="personalEmail"
              value={formData.personalEmail}
              onChange={handleChange}
              required
            />
          </div>
        )}
        {formData.userType === "business" && (
          <div style={{ paddingBottom: "20px" }}>
            <label htmlFor="businessName">Business Name</label>
            <input
              type="text"
              id="businessName"
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
              required
            />
          </div>
        )}
        <div style={{ paddingBottom: "20px" }}>
          <button type="submit">Submit</button>
        </div>
        <Link href={"/"}>Back to Home</Link>
      </form>
    </div>
  );
};

export default ConditionalForm;
