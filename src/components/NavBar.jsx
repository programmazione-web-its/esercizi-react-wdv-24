import { NavLink } from 'react-router-dom'

const exercises = [
  { path: '/shopping-cart', label: 'Shopping Cart' },
  { path: '/todo', label: 'Todo' },
  { path: '/pizza-menu', label: 'Pizza Menu' },
  { path: '/button', label: 'Button' },
  { path: '/heading', label: 'Heading' },
  { path: '/form', label: 'Form' },
]

export default function NavBar() {
  return (
    <nav className='app-navbar'>
      <NavLink to='/' className='app-navbar__logo'>
        Esercizi React
      </NavLink>
      {exercises.map((ex) => (
        <NavLink
          key={ex.path}
          to={ex.path}
          className={({ isActive }) =>
            `nav-link${isActive ? ' nav-link--active' : ''}`
          }
        >
          {ex.label}
        </NavLink>
      ))}
    </nav>
  )
}
