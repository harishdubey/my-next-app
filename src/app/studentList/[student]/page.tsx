"use client";
export default function Student({ params }: any) {
  console.log(params, "params");
  return (
    <div>
      <h2>Student</h2>
      <div>Name : {params.student}</div>
    </div>
  );
}
