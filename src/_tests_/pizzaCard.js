import React from 'react'

function PizzaCard({ details }) {

  return (
    <div>
      <h2>{details.name}</h2>
      <p>Size: {details.size}</p>
      <p>Pepperoni: {details.pepperoni ? 'yes' : 'no'}</p>
      <p>Sausage: {details.sausage ? 'yes' : 'no'}</p>
      <p>Bacon: {details.bacon ? 'yes' : 'no'}</p>
      <p>Chicken: {details.chicken ? 'yes' : 'no'}</p>
      <p>Special Instructions: {details.special ? details.special : 'No special instructions'} </p>
    </div>
  )
}

export default PizzaCard
