import React from 'react'

const TodoNav = () => {
  return (
    <nav className='border border-red w-full bg-purple-500 flex justify-between px-10 py-3 text-white'>
        <section className='w-[25%] text-xl font-bold'>i-Task</section>
        <section className=''>
            <ul className='flex gap-10 justify-end flex-wrap text-lg font-bold'>
                <li>Home</li>
                <li>Your Task</li>
            </ul>
        </section>
    </nav>
  )
}

export default TodoNav