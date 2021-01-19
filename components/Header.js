import Style from "../styles/header.module.css";

import { FaSearch } from "react-icons/fa";
import { FaSortDown } from "react-icons/fa";
import { RiNotificationBadgeFill } from "react-icons/ri";
import Main from "../components/Main";
import { useState } from "react";
import {GrCentos} from "react-icons/gr";
import {useEffect} from "react";

export default function Header({ state, handler }) {
  const [query, setQuery] = useState("");

  async function accept() {
    let url = `http://www.omdbapi.com/?apikey=2d34609c&s=the+witcher`;
    let response = await fetch(url);
    let result = await response.json();
    handler(result);
  };

  useEffect(() => {
      accept();
  },[])
 

  const formSubmit = async (e) => {
    e.preventDefault();
    let url = `http://www.omdbapi.com/?apikey=2d34609c&s=${query}`;

    let response = await fetch(url);
    let result = await response.json();
    handler(result);
  };
//   playsInline muted autoPlay loop 
  return (
    <>
      <div className={Style.header}>
        <div className={Style.bom}></div>
        <video className={Style.dew} controls type="video/mp4" id="some">
          <source src="video/head.mp4" />
        </video>
        <div className="absolute z-30 w-full ">
          <div className="flex  items-center justify-between  pl-5 h-40 md:pl-10">
            <div className="flex items-center">
              <span className="text-2xl md:text-3xl text-shopify  z-10">
                <GrCentos />
              </span>
              <h1 className="font-serif text-white text-2xl pl-2 mobile:text-xl ">
                {" "}
                The
                <span className="text-shopify font-extrabold pl-1">
                  {" "}
                  Smatron
                </span>
              </h1>
            </div>
            <div>
              <RiNotificationBadgeFill  className=" hover:cursor-pointer text-white  mr-20  text-3xl medium:text-2xl   hover:text-gray-500" />
            </div>
          </div>
          <div>
            <div>
              <h1 className="tracking-wider font-semibold text-center text-white text-5xl tablet:text-4xl  medium:text-3xl  mobile:text-2xl phone:text-xl font-old">
                Movie Awards for Entrepreneurs
              </h1>
              <h3 className="text-center text-white text-xl md:text-2xl mobile:text-lg font-old">
                Search and Nominate your Favourite Movies
              </h3>
            </div>
            <div className={Style.formdiv}>
              <form
                className="flex justify-around items-center h-full px-5"
                autoComplete="off"
                onSubmit={formSubmit}
              >
                <button className={Style.search}>
                  {" "}
                  <FaSearch />
                </button>
                <input
                  className=" placeholder-gray-500 "
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  type="text"
                  id={Style.picturetype}
                  name="picturetype"
                  placeholder="Search for your favourite movies"
                  pattern="[a-zA-Z1-9/ ]+"
                  title="Only Alphabets, Number and Space Required"
                />

                <div className={Style.dropdown}>
                  <button className={Style.search}>
                    <span id="put" className=" text-black pr-2 sm:pr-4 text-sm">
                      all
                    </span>
                    <FaSortDown className="inline mb-1 text-gray-500 bg-color-white hover:text-gray-900" />
                  </button>
                  <div className={Style.dropdowncontent}>
                    <a className="hover:text-gray-900" href="#">
                      all
                    </a>
                    <a className="hover:text-gray-900" href="#">
                      movie
                    </a>
                    <a className="hover:text-gray-900" href="#">
                      series
                    </a>
                    <a className="hover:text-gray-900" href="#">
                      episode
                    </a>
                  </div>
                </div>
              </form>
              <div className="text-gray-400 pl-10">
                <p className="com text-shopify sm:text-sm">
                  Common: movies series episode{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
