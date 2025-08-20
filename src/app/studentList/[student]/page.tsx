"use client";

import React from "react";

export default function Student({ params }: any) {
  const resolvedParams = React.use<any>(params);
  console.log(resolvedParams, "resolvedParams");
  return (
    <div>
      <h2>Student</h2>
      <div>Name : {resolvedParams.student}</div>
    </div>
  );
}
