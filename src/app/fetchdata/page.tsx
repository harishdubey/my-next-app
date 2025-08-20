"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

type dataType = {
  id: number;
  name: string;
  email: string;
};

type dataType2 = {
  id: number;
  username: string;
  website: string;
};

const FetchData = () => {
  const [data, setData] = useState<dataType[]>([]);
  const [data2, setData2] = useState<dataType2[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoading2, setIsLoading2] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
        // console.log(data, "äaaaaaa");
      });

    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setData2(data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading2(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>Fetch API</h1>
      <div style={{ paddingBottom: "15px" }}>
        <Link href={"/"}>Back to Home</Link>
      </div>
      {isLoading
        ? "Loading ..............."
        : data.map((item) => {
            return (
              <div key={item.id}>
                <strong>Name:</strong> {item.name}
                <strong> Email:</strong>
                {item.email}
                <br />
              </div>
            );
          })}
      <br />
      <br />

      {isLoading2
        ? "Loading...."
        : data2.map((item) => {
            return (
              <div key={item.id}>
                <strong>Username:</strong> {item.username}
                <strong> Website:</strong>
                {item.website}
                <br />
              </div>
            );
          })}
    </div>
  );
};

export default FetchData;
