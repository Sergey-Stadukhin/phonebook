export async function fetchSuggestions(query) {
  const res = await fetch(`https://example.com/api/suggest?q=${query}`);
  const data = await res.json();
  return data.slice(0, 10);
}