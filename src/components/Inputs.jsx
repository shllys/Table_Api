import React from 'react'

function Inputs(props) {
  return (
    <div>
      <label for="name">{props.name}</label>
      <br />
      <input type={props.type} required />
      <br />
    </div>
  )
}

export default Inputs