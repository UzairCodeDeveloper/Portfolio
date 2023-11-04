import React from 'react'

export default function Projectstructure(props) {
  return (
    <div class="card" style={{ width: 18 + 'rem' }}>
                    <img src={props.image} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{props.title}</h5>
                        <p class="card-text">{props.Desc}</p>
                        <a href={props.link} class="btn btn-warning" target='_blank'>View Demo</a>
                    </div>
                </div>
  )
}
