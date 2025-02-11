import Button from './components/Button'
import Menu from './components/Menu'

function App() {
  return (
    <>
      <Menu/>
      <div className=' bg-black pt-20 p-4 text-center text-white'>
        <h1 className="text-5xl font-bold">Bienvenido al Universo de Superhéroes</h1>
        <p className="mt-4 text-lg">Explora a tus héroes y villanos favoritos, cómics, películas y mucho más.</p>
        <Button/>
      </div>
    </>
  )
}

export default App
