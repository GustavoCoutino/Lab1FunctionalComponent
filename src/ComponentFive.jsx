import { useEffect, useState } from "react";

export function ComponentFive() {
  const [gif, setGif] = useState("");
  const apiKey = import.meta.env.VITE_API_KEY;
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${apiUrl}?api_key=${apiKey}`)
      .then((resp) => resp.json())
      .then((data) => setGif(data.data[0].images.original.url))
      .catch(console.warn);
  }, []);
  return <div className="container">{gif && <img src={gif} alt="Gif" />}</div>;
}
