import React from 'react'

const Manager = () => {
    return (
        <div>
        <div class="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
        <div className=' my-container bg-slate-50'>
        <h1>Password-King</h1>
        <p>Your own Password manager</p>
            <div className='text-black flex flex-col p-4 '>
                <input className='rounded-full' type="text" name='' id='' />
                <div className='flex'>
                    <input type="text" />
                    <input type="text" />
                </div>
            </div>
            </div>
        </div>

    )
}

export default Manager
