import { Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import ShoppingCartPage from './pages/ShoppingCartPage'
import TodoPage from './pages/TodoPage'
import PizzaMenuPage from './pages/PizzaMenuPage'
import ButtonPage from './pages/ButtonPage'
import HeadingPage from './pages/HeadingPage'
import FormPage from './pages/FormPage'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/shopping-cart' element={<ShoppingCartPage />} />
        <Route path='/todo' element={<TodoPage />} />
        <Route path='/pizza-menu' element={<PizzaMenuPage />} />
        <Route path='/button' element={<ButtonPage />} />
        <Route path='/heading' element={<HeadingPage />} />
        <Route path='/form' element={<FormPage />} />
      </Route>
    </Routes>
  )
}

export default App
