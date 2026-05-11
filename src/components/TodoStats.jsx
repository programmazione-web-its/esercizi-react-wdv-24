export default function TodoStats({ tasks }) {
  const totalTasks = tasks.length
  const completed = tasks.filter((task) => task.status === 'done').length
  const pending = tasks.filter((task) => task.status === 'pending').length
  const percentage = totalTasks ? Math.round((completed / totalTasks) * 100) : 0

  return (
    <div>
      <div className='todo-stats'>
        <div className='stat-card'>
          <span className='stat-card__label'>Totale</span>
          <span className='stat-card__value'>{totalTasks}</span>
        </div>
        <div className='stat-card'>
          <span className='stat-card__label'>Completate</span>
          <span className='stat-card__value'>{completed}</span>
        </div>
        <div className='stat-card'>
          <span className='stat-card__label'>Da fare</span>
          <span className='stat-card__value'>{pending}</span>
        </div>
      </div>
      <div className='progress-bar'>
        <div className='progress-bar__fill' style={{ width: `${percentage}%` }} />
      </div>
    </div>
  )
}
