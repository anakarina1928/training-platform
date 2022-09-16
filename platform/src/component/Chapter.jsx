import React from 'react'
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import '../asset/charpert.css'
const Charpert = () => {
  return (
    <>

      <section className=' d-flex align-self-center justify-content-around'>
        <p>CHARPERT 3/5</p>
        
        <div>
          <button className='borderBack'><IoIosArrowBack /></button>
          <button className='borderForward'><IoIosArrowForward /> </button>
        </div>
      </section>


    </>
  )
}

export default Charpert;
