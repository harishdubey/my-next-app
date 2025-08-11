"use client";
import Link from "next/link";
import "./layout.css";
import { usePathname, useRouter } from "next/navigation";

const Layout = ({ children }: any) => {
  const pathName = usePathname();
  console.log(pathName, "pathName");
  const route = useRouter();
  return (
    <div>
      <h1>Common About Layout</h1>
      {pathName !== "/about/aboutnested" ? (
        <ul className="menu-item">
          <li>Logo</li>
          <li>
            <Link href="/about">About Link</Link>
          </li>
          <li>
            <Link href="/about/aboutnested">About Nested Link</Link>
          </li>
          <li>
            <Link href="/about/aboutme">About Me Link</Link>
          </li>
        </ul>
      ) : (
        <button onClick={() => route.push("/about")}>Back to About Page</button>
      )}
      {children}
    </div>
  );
};

export default Layout;
