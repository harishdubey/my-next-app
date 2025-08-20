"use client";

import Link from "next/link";
import React from "react";

export default function Lecture({ params }: any) {
  const resolvedParams = React.use<any>(params);
  console.log(resolvedParams, "resolvedParams");
  return (
    <div>
      <h1>Lecture</h1>
      <div> Study Page : {resolvedParams.lecture[0]}</div>
      <div>Lecture : {resolvedParams.lecture[1]}</div>
      <div>
        <Link href={"/"}>Back to Home</Link>
      </div>
    </div>
  );
}
