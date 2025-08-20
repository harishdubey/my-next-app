"use client";
import { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";

type singleObject = {
  label: string;
  value: string;
};

type dropdownProps = {
  options: {
    label: string;
    value: string;
  }[];
  onSelect: ({}: singleObject) => void;
  placeholder: string;
};

const dropdownoptions = [
  {
    label: "Option 1",
    value: "option1",
  },
  {
    label: "Option 2",
    value: "option2",
  },
  {
    label: "Option 3",
    value: "option3",
  },
];

const Dropdown = ({ options, onSelect, placeholder }: dropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<{
    label: string;
    value: string;
  } | null>(null);

  const toggleSelect = () => setIsOpen(!isOpen);

  const onSelectChange = (item: { label: string; value: string }) => {
    setSelectedValue(item);
    onSelect(item);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdownContainer}>
      <button onClick={toggleSelect} className={styles.dropdownButton}>
        {selectedValue ? selectedValue.label : placeholder}
      </button>
      {isOpen && (
        <ul className={styles.dropdownMenu}>
          {options.map((item) => {
            return (
              <li key={item.label} onClick={() => onSelectChange(item)}>
                {item.label}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

const DropdownMain = () => {
  const handleDropDownSelect = (item: { label: string; value: string }) => {
    console.log(item);
  };

  return (
    <div>
      <h1>Dropdown</h1>
      <Dropdown
        options={dropdownoptions}
        onSelect={handleDropDownSelect}
        placeholder={"Please select option"}
      />
      <div>
        {" "}
        <Link href={"/"}>Back to Home</Link>
      </div>
    </div>
  );
};

export default DropdownMain;
