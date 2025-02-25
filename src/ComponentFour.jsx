import { useEffect, useState } from "react";

export function ComponentFour() {
  const [image, setImage] = useState(null);
  useEffect(() => {
    const fetchImage = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/?apikey=${
          import.meta.env.VITE_API_KEY
        }`
      );
      const data = await response.json();
      setImage(data.data[0].images.original.url);
    };
    fetchImage();
  }, []);
  return <img src={image}></img>;
}
