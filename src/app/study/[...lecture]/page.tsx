"use client";
export default function Lecture({ params }) {
  console.log(params, "params lec");
  return (
    <div>
      <h1>Lecture</h1>
      <div> Study Page : {params.lecture[0]}</div>
      <div>Lecture : {params.lecture[1]}</div>
    </div>
  );
}
