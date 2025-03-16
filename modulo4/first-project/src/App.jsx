import Button from './components/Button'
import Menu from './components/Menu'
import { useState } from 'react'
import Controllers from './components/props/Controllers'
import BtnIncrements from './components/props/BtnIncrements'

function App() {
  const [number, setNumber] = useState(0)

  return (
    <>
      <Menu/>
      <div className=' bg-black pt-20 p-4 text-center text-white'>
        <h1 className="text-5xl font-bold">Bienvenido al Universo de Superhéroes</h1>
        <p className="mt-4 text-lg">Explora a tus héroes y villanos favoritos, cómics, películas y mucho más.</p>
        <Button/>
      </div>

      <div className='bg-amber-100 flex flex-col justify-center w-xs'>
        <Controllers
          number = {number}
        />
        <BtnIncrements
          setNumber = {setNumber}
        />
      </div>
    </>
  )
}

export default App
