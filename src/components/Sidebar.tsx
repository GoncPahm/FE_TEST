import React from 'react'
import Logo from './Logo'

export default function Sidebar() {
  return (
    <aside className='w-[320px] bg-[#D9D9D9] h-[100vh] p-10'>
        <Logo/>
        <ul className='mt-10'>
            <li>
                Posts
            </li>
            <li>
                Logout
            </li>
        </ul>
    </aside>
  )
}
