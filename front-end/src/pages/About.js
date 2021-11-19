import React from "react"
import "../styles/About.css"

const About = () => {
  return (
    <div className="about">
      <div className="welcome">
        <h1>Welcome to TasteBook</h1>
        <p>
          Our MERN Stack Project which was completed as part of General
          Assembly's software engineering immersive course.
        </p>
      </div>
      <div className="about">
        <h1>About Us</h1>
        <div className="profiles">
          <div className="Milo">
            <h2>Milo</h2>
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
            <img
              src="https://ca.slack-edge.com/T0351JZQ0-U02AHLPNSNQ-7a7399fc3501-512"
              alt="Milo"
            />
          </div>
          <div className="Evelina">
            <h2>Evelina</h2>
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
            <img
              src="https://ca.slack-edge.com/T0351JZQ0-U02B4BSCDUG-67a5ebc84651-512"
              alt="Evelina"
            />
          </div>
          <div className="Yin">
            <h2>Yin</h2>
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
            <img
              src="https://ca.slack-edge.com/T0351JZQ0-U02DXLQ4R27-29fa8d4bd6d2-512"
              alt="Yin"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
