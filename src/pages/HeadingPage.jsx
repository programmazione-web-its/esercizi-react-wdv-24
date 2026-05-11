import Heading from '../components/Heading'

export default function HeadingPage() {
  return (
    <main className='page'>
      <h1 className='page__title'>Heading</h1>
      <div className='heading-demo'>
        <Heading>Sono un titolo h2</Heading>
        <Heading level={1} color='red'>
          Sono un titolo h1
        </Heading>
        <Heading level={3} color='steelblue'>
          Sono un titolo h3
        </Heading>
      </div>
    </main>
  )
}
