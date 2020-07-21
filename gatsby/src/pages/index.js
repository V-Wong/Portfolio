import React from "react"

import Header from "../components/header"
import { SingleColumn, TwoColumn } from "../components/layout"
import { LongCard, ShortCard } from "../components/card"
import Footer from "../components/footer"

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

    <TwoColumn title="Personal Projects">
      <ShortCard
        title="CubeSim"
        subheading="Rubiks Cube Simulater and Solver"
        image="./images/cube.webp"
        dotpoints={["Renders a two-dimensional Rubik's cube that can be controlled by the user with keyboard controls.",
                    "Generates solutions for any given state of the cube specified using the standard beginner's method.",
                    "Built in Python with Pygame for visuals and controls."]}
        tags={[{link: "https://www.python.org/", title: "Python"},
               {link: "https://www.pygame.org/news", title: "Pygame"}]}
      />
    </TwoColumn>

    <Footer/>
  </div>
)

export default IndexPage
