import React from 'react'

export default function Opt_card(props) {
  return (
    <div className='bg-slate-400 text-slate-900'>
      <h3>{props.title}</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, error.</p>
      <button className='detail bg-slate-900 text-white font-extrabold py-2 px-5 border-2 border-transparent transition-all rounded-lg hover:bg-transparent hover:border-slate-900 hover:text-slate-900 text-xs'>Details</button>
      <button className='icon'>&#9775;</button>
    </div>
  )
}
