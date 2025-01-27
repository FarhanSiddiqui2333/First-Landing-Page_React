import React from 'react'
import HeaderSec from '../component/HeaderSec'
import FooterSection from '../component/FooterSectiobn'

export default function EnrolPage() {
    return (
        <div className='page_bg bg-slate-900'>
            
            <HeaderSec />
            
            <form>
                <label>
                    <input type="text" placeholder='Enter The Name of Candidate' />
                </label>
                <label>
                    <input type="text" placeholder='Enter Father Name' />
                </label>
                <label>
                    <input type="number" placeholder='Enter You Phone Number' />
                    <input type="email" placeholder='Enter Your Email' />
                </label>
                <label>
                    <input type="number" placeholder='Enter another Number' />
                    <select>
                        <option value="">Select Docs</option>
                        <option value="domicile">Domicile</option>
                        <option value="cnic">CNIC of Father / Candidate</option>
                        <option value="nothing">None</option>
                    </select>
                </label>
                <label>
                    <select>
                        <option value=""></option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="custom">Custom</option>
                    </select>
                    <select>
                        <option value="">Select Duration</option>
                        <option value="">10:00 PM TO 12:00 AM</option>
                        <option value="">06:00 PM TO 02:00 AM</option>
                        <option value="">07:00 AM TO 05:30 PM</option>
                    </select>
                </label>
                <label className='selec'>
                    <h3>Select Your Technology</h3>
                    <select>
                        <option value="">Select Your Technology</option>
                        <option value="software">Software</option>
                        <option value="mechanical">Mechanical</option>
                        <option value="electrical">Electrical</option>
                        <option value="Textile">Textile</option>
                        <option value="cit">CIT</option>
                        <option value="dit">DIT</option>
                        <option value="graphics">Graphics Designing</option>
                        <option value="petrolium">Petrolium</option>
                        <option value="ai">AI</option>
                    </select>
                </label>
                <div>
                    <label htmlFor='financial'>
                        <input type="checkbox" name="finance" id='financial' />
                        Financial
                    </label>
                    <label htmlFor='regular'>
                        <input type="checkbox" name="finance" id='regular' />
                        Regular
                    </label>
                    <label htmlFor='private'>
                        <input type="checkbox" name="finance" id='private' />
                        Private
                    </label>
                </div>
                <input type="submit" id="btn" className='bg-slate-400 text-slate-900 py-2' value="Enrol Now" />
            </form>
            
            <FooterSection />
            
        </div>
    )
}
