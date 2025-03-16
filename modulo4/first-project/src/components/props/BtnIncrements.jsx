import React from 'react'

const BtnIncrements = ({setNumber}) => {
  return (
    <>
        <button 
            className='bg-amber-600 rounded-2xl mx-2 my-2 px-3 py-2 cursor-pointer'
            onClick={()=>{ setNumber(prev => prev + 1) }}
        >Incrementar</button>
        <button 
            className='bg-amber-600 rounded-2xl mx-2 my-2 px-3 py-2 cursor-pointer'
            onClick={()=>{ setNumber(prev => prev - 1) }}
        >Decrementar</button>
    </>
  )
}

export default BtnIncrements