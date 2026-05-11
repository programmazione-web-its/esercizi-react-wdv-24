export const PizzaMenu = ({ pizzas }) => {
  return (
    <ul className='pizza-menu'>
      {pizzas.map((pizza) => (
        <li
          key={pizza.id}
          className={`pizza-item${pizza.soldOut ? ' pizza-item--sold-out' : ''}`}
        >
          <h4>{pizza.name}</h4>
          <ul className='pizza-ingredients'>
            {pizza.ingredients.map((ingredient, i) => (
              <li key={`${ingredient}-${i}`}>{ingredient}</li>
            ))}
          </ul>
          {pizza.soldOut ? (
            <span className='pizza-sold-out-badge'>Esaurito</span>
          ) : (
            <p className='pizza-price'>€ {pizza.price.toFixed(2)}</p>
          )}
        </li>
      ))}
    </ul>
  )
}
