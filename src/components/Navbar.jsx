import React from 'react'
import g from "../Images/g.png"

const Navbar = () => {
  return (

    <nav className='bg-slate-800 text-white'>
      <div className='my-container flex justify-around items-center px- py-5 h-14'>
        <div className='logo font-bold text-2xl'>
          <span className='text-green-700'> &lt;</span>
          Password-
          <span className='text-green-700'>King/ &gt;</span>
          </div>
        {/* <ul>
            <li className='flex gap-4'> 
                <a className='hover:font-bold' href="/">Home</a>
                <a className='hover:font-bold' href="#">About</a>
                <a className='hover:font-bold' href="">Contact</a>
            </li>
        </ul> */}
        <button className='text-white bg-green-500 my-5 rounded-full flex gap-1 justify-between items-center'>
          <img className='invert w-10 p-1 rounded-full  ' src={g} alt="git" />
          <span className='font-bold px-1'>Github</span>
        </button>
        </div>
    </nav>
  )
}

export default Navbar
