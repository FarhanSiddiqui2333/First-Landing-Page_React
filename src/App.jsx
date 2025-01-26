import './App.css'
import bookImg from './assets/book.png'
import Cards from '../component/cards'
import Opt_card from '../component/Opt_card'
import HeaderSec from './HeaderSec'
import FooterSection from './FooterSection'

//Set for Routing

function App() {
    return (

        <div className="body w-full h-screen">
            
            <HeaderSec />

            <div className="hero w-full h-full bg-slate-900 pt-10">
                <div className="txt_content w-4/6 h-auto text-white place-items-center place-self-center translate-y-1/3 pt-10 mt-10">
                    <img src={bookImg} alt="" className="h-44 -translate-x-4 absolute" />
                    <h2 className="text-4xl font-bold my-4 -translate-x-3/4 pr-2">BE THE BEST</h2>
                    <h1 className="text-6xl font-black translate-x-28">
                        REACT-PROJECT 01 <span className="text-base">WITH THE SAME AMBITION</span>
                    </h1>
                    <p className="text-sm w-4/6 px-6 text-justify font-semibold mt-3 mb-8">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis excepturi voluptate consectetur quidem. Placeat
                        id voluptatum, excepturi fugiat quasi at, aspernatur autem alias culpa quas quisquam obcaecati, repellat ratione
                        asperiores?
                    </p>
                    <button className="bg-slate-400 text-slate-900 py-3 px-6 rounded-md font-extrabold mt-9 border-2 border-transparent transition-all hover:border-white hover:text-white hover:bg-transparent">
                        &#10063; READ DOCUMENTS
                    </button>
                </div>
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-slate-400 text-xs cursor-pointer">
                    Scroll Down
                </div>
            </div>
            <div className="text-5xl text-center font-extrabold py-3">Relevant Courses</div>
            <div className="card_section bg-slate-900">
                <Cards title="Web-Designer" sp1="Photoshop" sp2="AI" sp3="Figma" />
                <Cards title="Web-Developer" sp1="HTML" sp2="CSS" sp3="JavaScript" />
            </div>
            <div className="bg-slate-900 w-full text-center py-5 text-white">
                <h1 className="font-extrabold text-3xl mb-3">Choose One of these</h1>
                <p className="w-1/2 place-self-center text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa rem dicta quis enim cumque harum vero reprehnderit a voluptas
                    odio quod ex illo eos rerum, aperiam perferendis quo maiores consequuntur? Quia, sed. Rerum, doloremque! Expedita, ipsam
                    placeat. Ab ut omnis dolorum distinctio dolores ipsa molestiae delectus aperiam facere expedita. Maxime qui quam officiis,
                    placeat quis nostrum id odio ratione quae.
                </p>
                <button className="bg-slate-400 text-slate-900 py-2 px-6 rounded-md font-extrabold mt-9 border-2 border-transparent transition-all hover:border-white hover:text-white hover:bg-transparent text-xl">
                    Enrol
                </button>
            </div>
            <div className="text-3xl text-center font-extrabold py-2">Other Courses</div>
            <div className="opt_sec bg-slate-900">
                <Opt_card title="AI" />
                <Opt_card title="Product Hunting" />
                <Opt_card title="Marketing" />
                <Opt_card title="WorkShop" />
                <Opt_card title="Digital Marketing" />
                <Opt_card title="English Language" />
            </div>

            <FooterSection />

        </div>
    )
}

export default App
