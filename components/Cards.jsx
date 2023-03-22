import React from 'react'
import Image from 'next/image'
const Cards = (props) => {
  return (
    <div className='aspect-[7_/_10] max-w-full max-[1024px]:max-h-72 max-[640px]:max-h-max h-full justify-items-center rounded-[20px] card' onClick={()=>props.onClick()}>
      <div className='w-full h-full overflow-hidden relative inset-0 flex justify-center items-end card-container'>
        <Image src={props.image} height="800" width="400" alt={props.name} className="w-full h-full absolute"/>
        <div className='relative p-3 bg-[linear-gradient(179.73deg,rgba(0,0,0,0)_0%,#000000_68.12%)] py-5'>
          <h1 className='font-family2 text-[#FFF1D6] uppercase'>{props.name}</h1>
          <p className='font-family2 font-normal text-[0.7em] text-[#FFF1D6]'>{props.description}</p>
        </div>
      </div>
    </div>
  )
}

export default Cards