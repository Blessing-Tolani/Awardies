import Style from "../styles/header.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaShopify} from 'react-icons/fa';
import {FaSearch} from 'react-icons/fa';
import {FaSortDown} from 'react-icons/fa';
import {RiNotificationBadgeFill}  from 'react-icons/ri';



// playsInline muted  autoPlay loop


export default function Header(){
    return(
        <>
           
                <div className = {Style.header}>
                    <div className = {Style.bom}></div>
                    <video className = {Style.dew}   controls type="video/mp4" id="some">
                            <source src = "video/head.mp4" />
                    </video>
                    <div className = "absolute z-30 w-full ">
                        <div className = "flex  bg-red-900 items-center justify-between h-16 pl-5  md:h-40 md:pl-10">
                                <div className = "flex">
                                    <span className ="sm:text-2xl md:text-3xl text-shopify mt-2 z-10">
                                        <FaShopify />
                                    </span>
                                    <h1 className = "font-serif text-white text-lg sm:text-xl md:text-2xl pl-2 "> The<span className = "text-shopify font-extrabold"> Shoppies</span></h1>
                                </div>
                                <div>
                                    < RiNotificationBadgeFill  className = " hover:cursor-pointer text-white mb-1 mr-20 text-2xl md:text-3xl hover:text-black" />
                                </div>
                                
                        </div>
                        <div >
                            <div>
                                <h1 className = "tracking-wider font-semibold text-center text-white  mobile:text-2xl phone:text-xl text-3xl md:text-5xl font-old">Movie Awards for Entrepreneurs</h1>
                                <h3 className = "text-center text-white text-2xl font-old">Search and Nominate your Favourite Movies</h3>
                            </div>
                            <div className = {Style.formdiv}>
                                <form  className = "flex justify-around items-center h-full px-5"  autoComplete="off" >
                                    <button className = {Style.search}> <FaSearch /></button>
                                    <input className =" placeholder-gray-500 " type="text" id={Style.picturetype} name="picturetype" placeholder="Search for your favourite movies" pattern = "[a-zA-Z1-9/ ]+" title =  'Only Alphabets, Number and Space Required'/>
                                
                                    <div className = {Style.dropdown}>
                                        <button className = {Style.search}><span id = "put" className = " text-black pr-2 sm:pr-4 text-sm">all</span>< FaSortDown className = "inline mb-1 text-gray-500 bg-color-white hover:text-gray-900" /></button>
                                        <div className={Style.dropdowncontent}>
                                            <a  className = "hover:text-gray-900"  href="#">all</a>
                                            <a  className = "hover:text-gray-900" href="#">movie</a>
                                            <a  className = "hover:text-gray-900" href="#">series</a>
                                            <a  className = "hover:text-gray-900" href="#">episode</a>
                                        
                                        </div>
                                    </div>
                                    
                                
                                </form>
                                <div className = "text-gray-400 pl-10">
                                <p className = "com text-shopify sm:text-sm">Common: movies series episode  </p>
                            </div>
                        
                        </div>
                    </div>
                </div>
                
                </div>

              
           
        </>
    )
}