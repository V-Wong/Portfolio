import React from "react"

const Footer = () => {
    return (
      <footer>
        <p>
            Looking for software roles. Email me at <a href="mailto:vincent@vwong.dev">vincent@vwong.dev</a> :)
        </p>
        <div class="footer-links">
            <div class="link-container">
                <a href="https://github.com/V-Wong" target="_blank">
                  <img class="social-icon" src="./images/github.svg" alt="Black and white GitHub logo icon"/>
                </a>
            </div>
            <div class="link-container">
                <a href="https://drive.google.com/file/d/1mqRF7QdBDXfDD7TLQ3OuanALxHxd_D2f/view?usp=sharing" target="_blank">
                  <img class="social-icon" src="./images/resume.svg" alt="Black and white icon with silhouette of person"/>
                </a>
            </div>
            <div class="link-container">
                <a href="https://www.linkedin.com/in/vincent-wc-wong/" target="_blank">
                  <img class="social-icon" src="./images/linkedin.svg" alt="Black and white LinkIn logo icon"/>
                </a>
            </div>
        </div>
      </footer>
  )
}

export default Footer;