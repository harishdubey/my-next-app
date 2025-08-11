"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter();
  return (
    <div>
      <h2> About us Page</h2>
      <div>
        <button onClick={() => router.push("/")}>Back to Home page</button>
      </div>
      <div> &nbsp;</div>
      <div>
        <Link href="/about/aboutnested">Go to about Nested</Link>
      </div>
    </div>
  );
};

export default About;
