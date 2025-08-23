"use client";
import Link from "next/link";
import { useState } from "react";

const PasswordMeter = () => {
  const [password, setPassword] = useState("");

  const passwordStrength = (pass: any) => {
    let strength = 0;
    if (pass.length >= 6) strength += 1;
    if (/[A-Z]/.test(pass)) strength += 1;
    if (/[0-9]/.test(pass)) strength += 1;
    if (/[^A-Za-z0-9]/.test(pass)) strength += 1;
    return strength;
  };
  const strength = passwordStrength(password);

  const getStrengthLabel = () => {
    switch (strength) {
      case 0:
        return "";
      case 1:
        return "Weak";
      case 2:
        return "Medium";
      case 3:
      case 4:
        return "Strong";
      default:
        return "";
    }
  };

  const getStrengthColor = () => {
    switch (strength) {
      case 1:
        return "red";
      case 2:
        return "orange";
      case 3:
      case 4:
        return "green";
      default:
        return "transparent";
    }
  };

  return (
    <div>
      <h1>Password Meter</h1>
      <div>
        <label>Password :</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        {password && (
          <div
            style={{
              height: "8px",
              borderRadius: "4px",
              marginTop: "6px",
              backgroundColor: "#ddd",
            }}
          >
            <div
              style={{
                height: "100%",
                borderRadius: "4px",
                width: `${(strength / 4) * 100}%`,
                backgroundColor: getStrengthColor(),
                transition: "width 0.3s ease-in-out",
              }}
            ></div>
            {getStrengthLabel()}
          </div>
        )}
      </div>
      <div style={{ paddingTop: "30px" }}>
        <Link href={"/"}>Back to Home</Link>
      </div>
    </div>
  );
};

export default PasswordMeter;
