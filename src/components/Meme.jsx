import { data } from "../memesData";
import { useState } from "react";
function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "",
  });

  const [allMemeImages, setAllMemeImages] = useState(data);

  function handleChange(event) {
    const { name, value } = event.target;

    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [name]: value,
      };
    });
  }

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
        <input
          className="form--input"
          placeholder="Top text"
          type="text"
          name="topText"
          onChange={handleChange}
          value={meme.topText}
        />
        <input
          className="form--input"
          placeholder="Bottom text"
          type="text"
          name="bottomText"
          onChange={handleChange}
          value={meme.bottomText}
        />
        <button onClick={getMemeImage} className="form--button">
          Get a new meme image
        </button>
      </div>
      <div className="image--container">
        <img className="main--image" src={meme.randomImage}></img>
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}

export { Meme };
