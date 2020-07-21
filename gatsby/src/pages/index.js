import React from "react"

import Header from "../components/header"
import { SingleColumn } from "../components/layout"
import { LongCard } from "../components/card"

import "../styles/styles.css"

const IndexPage = () => (
  <div class="container">
    <Header/>
    <SingleColumn title="Collaborative Projects">
      <LongCard
        title="LinkUp - Australian University Event Tracker"
        subheading="Full Stack Developer"
        image="./images/linkup.webp"
        dotpoints={["Centralised source of events across Australian universities including UNSW, USyd and UniMelb.",
                    "Helps students discover new societies and consequently allows societies to gain exposure.",
                    "Actively working with UNSW societies to better support student academic and social life.",
                    "Development team consists of UNSW Computer Science and Software Engineering students."]}
        tags={[{link: "https://reactjs.org/", title: "React"},
               {link: "https://getbootstrap.com/", title: "Bootstrap"},
               {link: "https://expressjs.com/", title: "Express.js"}]}
      />
    </SingleColumn>
  </div>
)

export default IndexPage
