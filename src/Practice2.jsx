import React from 'react'
import Fruits from './Fruits';

export default function Practice1() {
  return (
    <div>
      <ul>
        {Fruits.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
