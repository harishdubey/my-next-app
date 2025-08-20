"use client";
import Link from "next/link";
import { useState } from "react";
import styles from "./page.module.css";

type ratingProps = {
  maxStars: number;
  initialRating: number;
  onChange: (value: number) => void;
};

const Rating = ({
  maxStars = 5,
  initialRating = 0,
  //   readOnly = false,
  onChange,
}: ratingProps) => {
  const [rating, setRating] = useState(initialRating);
  const [hover, setHover] = useState(0);

  const handleClick = (value: number) => {
    setRating(value);
    onChange(value);
  };

  return (
    <div>
      <h1>Star Rating</h1>
      <div className={styles.marginBottom}>
        {[...Array(maxStars)].map((_, index) => {
          const starValue = index + 1;
          return (
            <span
              key={index}
              className={`${styles.star} ${
                starValue <= (hover || rating) ? styles.on : styles.off
              }`}
              onClick={() => handleClick(starValue)}
              onMouseOver={() => handleClick(starValue)}
              onMouseLeave={() => setHover(0)}
            >
              &#9733;
            </span>
          );
        })}
      </div>
      <Link href={"/"}>Back to Home</Link>
    </div>
  );
};

const StarRating = () => {
  const handleRatingChange = (newRating: number) => {
    console.log(newRating, "newRating");
  };
  return (
    <div>
      <Rating maxStars={5} initialRating={3} onChange={handleRatingChange} />
    </div>
  );
};

export default StarRating;
