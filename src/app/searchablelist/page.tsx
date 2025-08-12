"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const items = [
  { name: "mukesh" },
  { name: "satish" },
  { name: "Suresh" },
  { name: "RaHUl" },
  { name: "Sunil" },
  { name: "Sonu" },
  { name: "hARish" },
];

const SearchableList = () => {
  const [filterdItems, setFilteredItems] = useState(items);
  const [searchTerm, setSearchTerms] = useState("");

  useEffect(() => {
    const result = items.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredItems(result);
  }, [searchTerm]);

  const handleChange = (value: string) => {
    setSearchTerms(value);
  };

  const router = useRouter();

  return (
    <div>
      <h1>Searchable List</h1>
      <div style={{ marginBottom: "15px" }}>
        <input type="text" onChange={(e) => handleChange(e.target.value)} />
      </div>
      {filterdItems.length > 0
        ? filterdItems.map((item) => (
            <div key={item.name}>{item.name.toLowerCase()}</div>
          ))
        : "No Result Found"}
      <button style={{ marginTop: "15px" }} onClick={() => router.push("/")}>
        Back to Home
      </button>
    </div>
  );
};

export default SearchableList;
