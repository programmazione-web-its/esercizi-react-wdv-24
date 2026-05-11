import { PizzaMenu } from '../components/PizzaMenu'

const pizzas = [
  {
    id: 1,
    name: 'Margherita',
    ingredients: ['pomodoro', 'mozzarella', 'basilico'],
    price: 7.5,
    soldOut: false,
  },
  {
    id: 2,
    name: 'Diavola',
    ingredients: ['pomodoro', 'mozzarella', 'salame piccante'],
    price: 9.0,
    soldOut: false,
  },
  {
    id: 3,
    name: 'Quattro Formaggi',
    ingredients: ['mozzarella', 'gorgonzola', 'parmigiano', 'fontina'],
    price: 10.0,
    soldOut: true,
  },
]

export default function PizzaMenuPage() {
  return (
    <main className='page'>
      <h1 className='page__title'>Pizza Menu</h1>
      <PizzaMenu pizzas={pizzas} />
    </main>
  )
}
