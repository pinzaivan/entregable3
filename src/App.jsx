import { useEffect, useState } from 'react'
import './App.css'
import {getRandomDimension} from './helpers/random'
import axios from 'axios'
import Location from './components/Location'
import ResidenList from './components/ResidenList'

function App() {
const [location, setLocation] = useState()

const hadleSubmit = (e)=>{
e.preventDefault()
const newLocation = e.target.locationId.value

const URL = `https://rickandmortyapi.com/api/location/${newLocation}`
axios.get(URL)
.then((res)=> setLocation(res.data))
.catch((err)=> console.log(err))
}

useEffect(()=>{
  const URL = `https://rickandmortyapi.com/api/location/${getRandomDimension()}`
  axios.get(URL)
  .then((res)=> setLocation (res.data))
  .catch((err)=> console.log(err))
  
 },[])

  return (
    <div className="App bg-[url('/images/background.png')] bg-cover text-white font-['Fira_Code']">
      
      <div className= 'w-full grid place-content-center relative box-border overflow-hidden'>
        <img className='-translate-y-1/3 animate-[ping_8s_cubic-bezier(0,1,1,0)_infinite]' src="/images/Planet.png" alt="" />
        
        <img className='absolute bottom-30 self-center left-1/2 -translate-x-1/2 z-10' src="/images/nombre1.png" alt="" />
        
        <img className='absolute left-1/2 -translate-x-1/2 w-full h-full z-0' src="/images/halo.png" alt="" />
      </div>
      
      <form onSubmit={hadleSubmit}>
        <div className='h-[50px] flex justify-center'>
          <input id='locationId' placeholder='Type a location Id ...'
          className='border-2 border-[#8EFF8B] h-full w-2/4 text-center text-black z-10' type="text" />
          <button className='bg-[#8fff8b81] border-2 border-[#8EFF8B] py-2 px-7 h-full hover:bg-[#8fff8b] z-10'>Search <i className='bx bx-search-alt-2'></i></button>
        </div>
        <h2 className='text-[#8EFF8B] text-center py-6'>Welcome to the crazy universe!</h2>
      </form>
      <Location location={location}/>
      <ResidenList location={location}/>
    </div>
  )
}

export default App
