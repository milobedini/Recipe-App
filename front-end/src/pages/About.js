import React from "react"
import "../styles/About.css"

const About = () => {
  return (
    <div className="about">
      <h1>About Us</h1>
      <div className="profiles">
        <div className="Milo">
          <h2>Milo</h2>
          <p>{/* <img id="Milo" src={MiloPic} alt="Milo"></img> */}</p>
          <p>
            <a
              href="https://github.com/milobedini"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </p>
          <p>
            <a
              href="https://www.linkedin.com/in/milo-bedini-794787154/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </p>
        </div>
        <div className="Evelina">
          <h2>Evelina</h2>
          <p>{/* <img id="Evelina" src={EvelinaPic} alt="Evelina"></img> */}</p>
          <p>
            <a
              href="https://github.com/evelinakireilyte"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </p>
          <p>
            <a
              href="https://www.linkedin.com/in/evelina-kireilyte-209562139/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </p>
        </div>
        <div className="Yin">
          <h2>Yin</h2>
          <p>{/* <img id="Yin" src={YinPic} alt="Yin"></img> */}</p>
          <p>
            <a
              href="https://github.com/yin-wai"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </p>
          <p>
            <a
              href="https://www.linkedin.com/in/yin-wai-tse-9518b3160/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
