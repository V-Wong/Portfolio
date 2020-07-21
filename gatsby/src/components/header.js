import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../styles/styles.css"

const Header = ({ siteTitle }) => (
  <header class="profile">
    <div class="top-bar">
      <h1>Vincent Wong</h1>
      <h2>Full Stack Software Engineer</h2>
      <nav class="links-container">
        <div class="link-container">
          <img class="social-icon" src="./images/github.svg" alt="Black and white GitHub logo icon"/>
          <a class="underline" href="https://github.com/V-Wong" target="_blank">Github</a>
        </div>
        <div class="link-container">
          <img class="social-icon" src="./images/resume.svg" alt="Black and white icon with silhouette of person"/>
          <a class="underline" href="https://drive.google.com/file/d/1mqRF7QdBDXfDD7TLQ3OuanALxHxd_D2f/view?usp=sharing" target="_blank">Resume</a>
        </div>
        <div class="link-container">
          <img class="social-icon" src="./images/linkedin.svg" alt="Black and white LinkIn logo icon"/>
          <a class="underline" href="https://www.linkedin.com/in/vincent-wc-wong/" target="_blank">LinkedIn</a>
        </div>
        <div id="dark-theme-button" class="link-container">
          <img class="social-icon" src="./images/moon.svg" alt="Black and white moon icon"/>
          <a class="underline">Dark</a>
        </div>
      </nav>
    </div>
    <blockquote class="about-me">
      <p>
        Computer Science, Mathematics and Statistics student at UNSW in Sydney.
      </p>
      <p>
        Active in full stack web development and native mobile app development.
      </p>
      <p>
        Interested in algorithms, theoretical computer science and pure maths.
      </p>
    </blockquote>
	</header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
