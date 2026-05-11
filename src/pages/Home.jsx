import { NavLink } from 'react-router-dom'

const exercises = [
  { path: '/shopping-cart', label: 'Shopping Cart' },
  { path: '/todo', label: 'Todo & Stats' },
  { path: '/pizza-menu', label: 'Pizza Menu' },
  { path: '/button', label: 'Button' },
  { path: '/heading', label: 'Heading' },
  { path: '/form', label: 'Form' },
]

export default function Home() {
  return (
    <main className='page'>
      <h1 className='page__title'>Esercizi React</h1>
      <p className='page__subtitle'>Seleziona un esercizio dalla lista o dalla barra di navigazione.</p>
      <ul className='filtered-list'>
        {exercises.map((ex) => (
          <li key={ex.path}>
            <NavLink className='nav-link' to={ex.path}>
              {ex.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </main>
  )
}
