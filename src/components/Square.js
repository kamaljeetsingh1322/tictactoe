import React from 'react'

const Square = ({ value }) => {
  return (
    <button type="button" className="square">
      {value}
    </button>
  )
}

// to call and print children props
// const Square = ({ value, children }) => {
//   return <button type="button">{children}</button>
// }

// const Square = props => {
//  return <button type="button">{props.value}</button>
// }

export default Square
