import React from "react"

const LongCard = props => {
  return (
    <div class="card">
      <div class="description">
        <h3>{props.title}</h3>
        <h4 class="project-subheading">{props.subheading}</h4>
        <a class="demo-link underline" href={props.link} target="_blank">Live Demo</a>
      </div>
      <div class="image-container">
        <img class="image" src={props.image}/>
      </div>
      <div class="dotpoints">
        <ul>
          {props.dotpoints.map(point => (
            <li>
              {point}
            </li>
          ))}
        </ul>
      </div>
      <div class="tags">
        {props.tags.map(tag => (   
          <span class="tag">
            <a href={tag.link} target="_blank">{tag.title}</a>
          </span>
        ))}
      </div>
    </div>
  )
}

export { LongCard }