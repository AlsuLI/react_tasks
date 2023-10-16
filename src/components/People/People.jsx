import React from 'react'

export const People = ({ppl}) => {
  let result = ppl.map((el) => <li>{el}</li>)
  return (
    <ul>{result}</ul>
  )
}
