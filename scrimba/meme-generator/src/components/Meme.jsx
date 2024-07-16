import { useState, useEffect } from "react"

const Meme = () => {

  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: ''
  })
  const [allMemes, setAllMemes] = useState([])

  const getMemeImage = () => {
    const memesArray = allMemes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const { url } = memesArray[randomNumber]
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }))
  }

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then(res => res.json())
      .then(data => setAllMemes(data.data.memes))
  }, [])


  const handleChange = event => {
    const { name, value } = event.target
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }))
  }

  return (
    <main>
        <section className="form">
          <div>
            <label className="form--label">Top text</label>
            <input 
              type="text"
              name="topText"
              className="form--input"
              value={meme.topText}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="form--label">Bottom text</label>
            <input
              type="text"
              name="bottomText"
              className="form--input"
              value={meme.bottomText}
              onChange={handleChange}
            />
          </div>
          <button
            className="form--button"
            onClick={getMemeImage}
          >
            Get a new meme image  🖼
          </button>
        </section>
        <section className="meme">
          {meme.randomImage && <img
            src={meme.randomImage}
            alt="random meme image"
            // width={300}
            className="meme--img"
          />}
          <section className="meme--text top">{meme.topText}</section>
          <section className="meme--text bottom">{meme.bottomText}</section>
        </section>
    </main>
  )
}

export default Meme