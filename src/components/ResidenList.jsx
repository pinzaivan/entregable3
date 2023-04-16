import React, { useEffect, useState } from 'react'
import ResidentCard from './ResidentCard'

const ResidenList = ({location}) => {
  
  const [currentPage, setCurrentPage] = useState(1)
  
  const RESIDENTS_PER_PAGE = 20
  const arrayPages = []

  const quantityPages = Math.ceil(location?.residents?.length / RESIDENTS_PER_PAGE)

  for (let i=1;i<= quantityPages;i++){
    arrayPages.push(i)
  }
  const starCut = currentPage*RESIDENTS_PER_PAGE-RESIDENTS_PER_PAGE
  const endCut= currentPage*RESIDENTS_PER_PAGE
    
  const residents = location?.residents

  useEffect(()=>{
    setCurrentPage(1)
  },[location])
  
  return (
  <>
  <section className='p-4 grid gap-6 auto-row-auto grid-cols-[repeat(auto-fill,_minmax(220px,_1fr))] max-w-[1000px] mx-auto'>
    {
      residents?.slice(starCut,endCut).map((resident)=>(
        <ResidentCard key={resident} resident={resident}/>
      ))
      
    }
  </section>
  <ul className='flex gap-4 justify-center py-4'>
    {
      arrayPages.map(page=> <li onClick={()=> setCurrentPage(page)} className={`hover:bg-green-700/50 rounded-md cursor-pointer p-3 ${page===currentPage && "bg-green-700 text-white rounded-md"}`} key={page}>{page}</li>)
    }
  </ul>
  <h3 className=''>Elaborado por Ivan Jojoa</h3>
  </>
  )
}

export default ResidenList
