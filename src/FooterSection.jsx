import React from 'react'

export default function FooterSection(props) {
    return (
        <div className='foot bg-slate-900 text-white w-full'>
            <div className="feedback flex w-full justify-between items-center">
                <div>
                    <textarea placeholder='Send your Great Feedback' className='text-slate-400'></textarea>
                    <button className='bg-slate-400 py-3 px-6 rounded-md font-bold transition-all border-2 border-transparent text-slate-900 hover:text-white hover:bg-transparent hover:border-white'>SEND</button>
                </div>
                <div>
                    <h4>
                        SEND YOUR GREAT FEEDBACK TO RATE OUR WEBSITE
                    </h4>
                </div>
            </div>
            <div className="footer_sec">
                <div>
                    <ul>
                        <li className='li_head'>WEB-DEVELOPMENT</li>
                        <li>HTML</li>
                        <li>Css</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>DataBase</li>
                        <li>Next Js</li>
                    </ul>
                    <ul>
                        <li className='li_head'>WEB-DESIGNING</li>
                        <li>Paint</li>
                        <li>PhotoShop</li>
                        <li>Adobe Illustrator</li>
                        <li>Corel Draw</li>
                        <li>Figma</li>
                        <li>Vector</li>
                        <li>UI/UX Designing</li>
                    </ul>
                    <ul>
                        <li className='li_head'>CIT</li>
                        <li>Paint</li>
                        <li>Ms Word</li>
                        <li>Ms Power Point</li>
                        <li>Ms Excel</li>
                        <li>Ms Access</li>
                        <li>PhotoShop</li>
                        <li>Banner Designing</li>
                    </ul>
                    <ul>
                        <li className='li_head'>OTHER TECHNOLOGIES</li>
                        <li>Mechanical Engineering</li>
                        <li>Civil Engineering</li>
                        <li>Chemical Engineering</li>
                        <li>Petrolium Engineering</li>
                        <li>DIT</li>
                        <li>Dress Making</li>
                    </ul>
                </div>
                <div>
                    <span>Copyright &#169; in 2024-25</span>
                    <span>&#127760;  Region / Language</span>
                    <span>Designed by FARHAN ZAKIR</span>
                </div>
            </div>
        </div>
    )
}
