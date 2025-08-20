import Link from "next/link";

export default function Study() {
  return (
    <div>
      <h1>Study All Lecture</h1>
      <div>
        <Link href={"/study/lecture"}>All Lecture</Link>
      </div>
      <div>
        <Link href={"/study/lecture/lecture2"}>lecture Individual</Link>
      </div>
      <div>
        <Link href={"/"}>Back to Home</Link>
      </div>
    </div>
  );
}
