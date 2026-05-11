import Button from '../components/Button'

export default function ButtonPage() {
  return (
    <main className='page'>
      <h1 className='page__title'>Button</h1>
      <div className='btn-group'>
        <Button id='mio-pulsante' onClick={() => console.log('clicked')} variant='danger'>
          Il mio pulsante
        </Button>
        <Button id='mio-pulsante-2' disabled={true}>
          Il mio pulsante 2
        </Button>
        <Button variant='ghost'>Ghost button</Button>
      </div>
    </main>
  )
}
