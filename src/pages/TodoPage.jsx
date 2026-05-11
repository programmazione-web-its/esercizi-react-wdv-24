import { useState } from 'react'
import TodoStats from '../components/TodoStats'

const initialTasks = [
  { id: 1, text: 'Fare la spesa', status: 'done' },
  { id: 2, text: 'Studiare React', status: 'pending' },
  { id: 3, text: 'Andare in palestra', status: 'done' },
  { id: 4, text: 'Leggere un libro', status: 'pending' },
  { id: 5, text: 'Chiamare il dentista', status: 'pending' },
]

export default function TodoPage() {
  const [tasks, setTasks] = useState(initialTasks)

  function toggleStatus(id) {
    setTasks((prevTasks) =>
      prevTasks.map((t) => {
        if (t.id === id) {
          return { ...t, status: t.status === 'pending' ? 'done' : 'pending' }
        }
        return t
      }),
    )
  }

  return (
    <main className='page'>
      <h1 className='page__title'>Todo & Stats</h1>
      <ul className='filtered-list' style={{ marginBottom: '24px' }}>
        {tasks.map((el) => (
          <li
            key={el.id}
            onClick={() => toggleStatus(el.id)}
            style={{ cursor: 'pointer', textDecoration: el.status === 'done' ? 'line-through' : 'none' }}
          >
            {el.text}
          </li>
        ))}
      </ul>
      <TodoStats tasks={tasks} />
    </main>
  )
}
