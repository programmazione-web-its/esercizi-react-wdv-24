import { useState, useRef } from 'react'
import Button from './Button'

const newItem = { id: 3, name: 'Cuffie', quantity: 1, price: 59 }

export default function ShoppingCart() {
  const initialItems = [
    { id: 1, name: 'Tastiera', quantity: 1, price: 89 },
    { id: 2, name: 'Monitor', quantity: 1, price: 299 },
  ]
  const [items, setItems] = useState(initialItems)

  // 🚨 Come faccio a gestire i refs per un array di elementi???
  const inputRef = useRef(null)

  const cartTotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0)

  function addItem(item) {
    setItems((prevItems) => [...prevItems, item])
  }

  function removeItem(id) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id))
  }

  function updateQuantity(id) {
    const qnty = inputRef.current.value
    setItems((prevItems) =>
      prevItems.map((el) => {
        if (el.id === id) return { ...el, quantity: Number(qnty) }
        return el
      }),
    )
  }

  return (
    <div className='cart'>
      {items.map((item) => (
        <div className='cart-item' key={item.id}>
          <span className='cart-item__name'>{item.name}</span>
          <div className='quantity-control'>
            <input ref={inputRef} name='id' type='number' defaultValue={item.quantity} />
            <button onClick={() => updateQuantity(item.id)}>Aggiorna</button>
          </div>
          <span className='cart-item__price'>€ {(item.price * item.quantity).toFixed(2)}</span>
          <button className='cart-remove-btn' onClick={() => removeItem(item.id)}>
            🗑️
          </button>
        </div>
      ))}
      <Button onClick={() => addItem(newItem)} variant='danger'>
        Aggiungi elemento
      </Button>
      <div className='cart-total'>
        <span>Totale</span>
        <span>€ {cartTotal.toFixed(2)}</span>
      </div>
    </div>
  )
}
