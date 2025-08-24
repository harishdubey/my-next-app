"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./page.module.css";

const accordianData = [
  {
    question: "question 1",
    answer:
      "answer 1 goes here answer 1 goes here answer 1 goes here answer 1 goes here answer 1 goes here ",
  },
  {
    question: "question 2",
    answer:
      "answer 2 goes here answer 2 goes here answer 2 goes here answer 2 goes here ",
  },
  {
    question: "question 3",
    answer:
      "answer 3 goes here answer 3 goes here answer 3 goes here answer 3 goes here answer 3 goes here ",
  },
  {
    question: "question 4",
    answer:
      "answer 4 goes here answer 4 goes here answer 4 goes here answer 4 goes here  ",
  },
];

const FaqAccordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleItemClick = (index: number) => {
    console.log(index, "index");
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.accordionContainer}>
      <h1>FAQ Accordion</h1>
      <div>
        <Link href={"/"}>Back to Home</Link>
      </div>
      <div className={styles.accordion}>
        {accordianData.map((item, index) => {
          return (
            <FAQItem
              key={index}
              index={index}
              isActive={activeIndex === index}
              question={item.question}
              answer={item.answer}
              handleClick={handleItemClick}
            />
          );
        })}
      </div>
    </div>
  );
};

type faqPropsTypes = {
  isActive: boolean;
  index: number;
  question: string;
  answer: string;
  handleClick: (index: number) => void;
};

const FAQItem = ({
  isActive,
  index,
  question,
  answer,
  handleClick,
}: faqPropsTypes) => {
  return (
    <div>
      <div
        className={isActive ? styles.activeTitle : styles.accordionTitle}
        onClick={() => handleClick(index)}
      >
        {question}
      </div>
      {isActive && <div className={styles.accordionContent}>{answer}</div>}
    </div>
  );
};

export default FaqAccordion;
