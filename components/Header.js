import Style from "../styles/header.module.css";
import { useAlert } from "react-alert";
import { FaSearch } from "react-icons/fa";
import { FaSortDown } from "react-icons/fa";
import { RiNotificationBadgeFill } from "react-icons/ri";
import { useState, useEffect } from "react";
import { GrCentos } from "react-icons/gr";

export default function Header({ visibility, handler, handler2 }) {
  const alert = useAlert();
  const [query, setQuery] = useState("");
  const [step, setStep] = useState(0);

  async function accept() {
    try {
      let url = `https://www.omdbapi.com/?apikey=2d34609c&s=the+witcher`;
      let response = await fetch(url);
      let result = await response.json();
      handler(result);
    } catch (err) {
      alert.show("Error!, Try Again");
    }
  }

  useEffect(() => {
    accept();
  }, []);

  function toggleForm() {
    setStep(step + 1);
  }
  useEffect(() => {
    handler2(!visibility);
  }, [step]);
  const formSubmit = async (e) => {
    e.preventDefault();
    try {
      let url = `https://www.omdbapi.com/?apikey=2d34609c&s=${query}`;

      let response = await fetch(url);
      let result = await response.json();
      handler(result);
    } catch (err) {
      alert.show(err);
    }
  };
  //   playsInline muted autoPlay loop
  return (
    <>
      <div className={Style.header}>
        <div className={Style.bom}></div>
        <video
          className={Style.dew}
          playsInline
          muted
          autoPlay
          loop
          controlsList="nodownload"
          type="video/mp4"
          id="some"
        >
          <source src="video/head.mp4" />
        </video>
        <div className="absolute z-30 w-full ">
          <div className="flex  items-center justify-between  pl-5 h-40 md:pl-10">
            <div className="flex items-center">
              <span className="text-xl  text-white z-10">
                <GrCentos />
              </span>
              <h1
                className="font-serif  text-2xl pl-2 mobile:text-xl "
                style={{ color: "#17e9e0" }}
              >
                Awardies
              </h1>
            </div>
            <div>
              <a title="View nomination list" className="hover:cursor-pointer">
                <RiNotificationBadgeFill
                  onClick={toggleForm}
                  className=" hover:cursor-pointer text-white  mr-6 md:mr-20  text-3xl medium:text-2xl   hover:text-gray-500"
                />
              </a>
            </div>
          </div>
          <div>
            <div>
              <h1 className="tracking-wider font-semibold text-center text-white text-5xl tablet:text-4xl  medium:text-3xl  mobile:text-2xl phone:text-xl font-old">
                Movie Awards for Entrepreneurs
              </h1>
              <h3 className="text-center text-white text-lg md:text-xl mobile:text-lg font-old">
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
              <div className=" pl-10">
                <p
                  className="com font-hairline sm:text-sm"
                  style={{ color: "#17e9e0" }}
                >
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
