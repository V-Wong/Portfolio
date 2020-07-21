import React from "react"

export default function Layout({ children }) {
  return (
    <div class="container">
      {children}
    </div>
  )
}

const SingleColumn = props => {
  return (
    <>
      <h2 class="section-heading">{props.title}</h2>
      <hr/>
      <section class="single-column">
        {props.children}
      </section>
    </>
  )
}

export { SingleColumn }