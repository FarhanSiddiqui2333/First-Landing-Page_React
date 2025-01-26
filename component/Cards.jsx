import React from 'react'

export default function Cards(props) {
  return (
    <div className='card bg-slate-400'>
        <div className='flex gap-4'>
            <span className='bg-slate-900 text-white font-bold '>{props.sp1}</span>
            <span className='bg-slate-900 text-white font-bold '>{props.sp2}</span>
            <span className='bg-slate-900 text-white font-bold '>{props.sp3}</span>
        </div>
      <h2 className='font-black'>{props.title}</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa dignissimos dolor esse sunt, incidunt doloremque error.</p>
      <button>&#9775;</button>
    </div>
  )
}
