export default async function ServerApiCall() {
  const response = await fetch(
    "http://universities.hipolabs.com/search?country=India"
  );
  console.log(response.ok);
  if (!response.ok) {
    throw new Error("Error fetching Data");
  }
  const universities = await response.json();

  return (
    <ul>
      {universities.map((post) => {
        return <li key={post.name}>{post.name}</li>;
      })}
    </ul>
  );
}
