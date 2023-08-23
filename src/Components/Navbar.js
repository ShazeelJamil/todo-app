import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <div className='py-4 bg-white w-full' >
                <nav className='w-[80%] mx-auto flex justify-between' >
                    <h1 className='text-3xl text-purple-700'>
                        Priorities
                    </h1>
                    <ul className='flex gap-x-4 font-light text-2xl' >
                        {/* <li>Home</li>
                        <li>Todo</li> */}
                        <Link to={'/'} > <li>Home</li></Link>
                        <Link to={'/todo'} > <li>Todo</li></Link>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
