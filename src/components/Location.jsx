import React from 'react'

const Location = ({location}) => {
 
  return (
    <section className='bg-gray-500/40 m-4 rounded-lg my-14'>
      <div className='flex justify-center'>
        <h2 className='py-3 text-lg'><b>{location?.name}</b></h2>
      </div>
      <ul className='grid gap-5 py-1 sm:flex gap-20 justify-center py-5'>
        <li><b>Type: </b>{location?.type}</li>
        <li><b>Dimension: </b>{location?.dimension}</li>
        <li><b>Population: </b>{location?.residents?.length}</li>
               
      </ul>


    </section>
  )
}

export default Location
