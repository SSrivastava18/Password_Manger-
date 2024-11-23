import React from 'react'

const Manager = () => {
    return (
        <div>
            <div class="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
            <div className=' my-container bg-slate-50'>
                <h1 className='text-4xl  font-bold text-center'>
                    <span className='text-green-700'> &lt;</span>
                    Password-
                    <span className='text-green-700'>King/ &gt;</span>
                </h1>
                <p className='text-green-900 text-lg text-center'>Your own Password manager</p>
                <div className='text-black flex flex-col p-4 gap-5 items-center'>
                    <input placeholder='Enter Website-URL' className='rounded-full flex flex-col border border-green-500 p-4 w-full py-1' type="text" name='' id='' />
                    <div className='flex w-full gap-8'>
                        <input placeholder='Username' className='rounded-full flex flex-col border border-green-500 p-4 w-full py-1' type="text" name='' id='' />
                        <div className='relative'>
                        <input placeholder='Password' className='rounded-full flex flex-col border border-green-500 p-4 w-full py-1' type="text" name='' id='' />
                        <span className='absolute right-[3px] top-[4px] cursor-pointer'>
                        <img className='p-1' width={25} src="sa.png" alt="No" />
                        </span>
                        </div>
                    </div>
                    <button className='bg-blue-600 rounded-full justify-center px-4 py-2 w-fit hover:bg-blue-400'>Add Password</button>
                </div>
            </div>
        </div>

    )
}

export default Manager
