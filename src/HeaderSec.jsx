import React from 'react'
import logoImg from '/src/assets/logo.png'


export default function HeaderSec(props) {
    return (
        <div className="header shadow-md shadow-slate-700 w-4/5 rounded-xl mt-7 h-auto bg-slate-400 flex justify-between px-10 py-3 items-center absolute left-1/2 -translate-x-1/2 ">
            <div className="logo">
                <img src={logoImg} alt="" width={"150px"} />
            </div>
            <div className="links flex gap-8 items-center">
                <ul className='flex gap-4 text-xs text-slate-900'>
                    <li className='links_effecet'>HOME</li>
                    <li className='links_effecet'>ENROLLMENT</li>
                    <li className='links_effecet'>CONTACT</li>
                    <li className='links_effecet'>SERVICES</li>
                    <li className='links_effecet'>BLOGS</li>
                </ul>
                <div className="btn">
                    <a className="bg-slate-900 text-white font-extrabold py-2 px-5 mx-3 border-2 border-transparent transition-all rounded-lg hover:bg-transparent hover:border-slate-900 hover:text-slate-900">GET STARTED</a>               
                    <button className='text-slate-900 font-bold links_effecet'>| &#9894; ACCOUNT</button>
                </div>
            </div>
        </div>
    )
}
