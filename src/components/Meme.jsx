import { data } from "../memesData";
import { useState } from "react";
function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "",
  });

  const [allMemeImages, setAllMemeImages] = useState(data);

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomMeme =
      memesArray[Math.floor(Math.random() * memesArray.length)];
    console.log(meme);
    setMeme((prevMeme) => {
      return { ...prevMeme, randomImage: randomMeme.url };
    });
  }

  return (
    <main>
      <div className="form">
        <input className="form--input" placeholder="Top text" type="text" />
        <input className="form--input" placeholder="Bottom text" type="text" />
        <button onClick={getMemeImage} className="form--button">
          Get a new meme image
        </button>
      </div>
      <div className="image--container">
        <img className="main--image" src={meme.randomImage}></img>
      </div>
    </main>
  );
}

export { Meme };
