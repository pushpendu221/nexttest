"use client";

import { useEffect, useState } from "react";

export default function ClientApiCall() {
  const [loading, setloading] = useState(false);
  const [error, setError] = useState();
  const [universities, setUniversities] = useState();
  useEffect(() => {
    async function getUniversityName() {
      setloading(true);
      const response = await fetch(
        "http://universities.hipolabs.com/search?country=India"
      );
      // console.log(response);
      if (!response.ok) {
        setloading(false);
        setError("Error Fetching Data");
      }
      const universities = await response.json();
      setUniversities(universities);
      setloading(false);
    }
    getUniversityName();
  }, []);

  if (loading) {
    return <h2>Loooooading</h2>;
  }
  if (error) {
    return <h2>{error}</h2>;
  }
  if (universities) {
    return (
      <ul>
        {universities.map((post) => {
          console.log(post);
          return <li key={post.name}>{post.name}</li>;
        })}
      </ul>
    );
  }

  return <h2>No universities found</h2>;
}
