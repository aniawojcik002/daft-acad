import Box from "@mui/material/Box";
import { useEffect, useState } from "react";

export function Rick() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  //added Effect Hook without dependencies 
  useEffect(() => {
    fetchImages();
  }, []);
  // fetching data from Ricky Morty API
  async function fetchImages() {
    setLoading(true);
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    const imagesall = data.results.map((charakter) => {
      return {
        id: charakter.id,
        name: charakter.name,
        status: charakter.status,
        url: charakter.url,
        image: charakter.image,
      };
    });
    setImages(imagesall); //function which gives (images) array with character objects - updating the setImages state
    setLoading(false); //variable loading set to false after loading of fetch data
  }
  if (loading) return <p>"Loading..."</p>;
  return (
    <Box>
      {images.map((item) => {
        return (
        <img src={item.image} alt={item.id} style={{width: 300, height: 300}} />
        )
      })}
    </Box>
  );
}
