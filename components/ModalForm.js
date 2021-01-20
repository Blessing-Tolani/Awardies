

export default function ModalForm({ nominateList, visibility, handler2 }) {
  let response = [nominateList];
  let resultLength = nominateList.length;
 
  function reset() {
    handler2(!visibility);
  }

  return (
    <>
      {resultLength == 0 ? (
        <div></div>
      ) : (
        <div>
          <div className={`${visibility ? "open" : "closed"} ...rest`}>
            <div className="w3-modal full " style={{ display: "block" }}>
              <div className="w3-modal-content w3-animate-zoom">
                <div className="w3-container ">
                  <span className="w3-button w3-display-topright w3-large">
                    <h2 onClick={reset}>X</h2>
                  </span>
                </div>
                <div className="relative ">
                  <h2 className=" aaa text-white  text-center">
                    Nomination list
                  </h2>
                  <div className="flex justify-between">
                    <hr className=" w-1/3" />
                    <hr className=" w-1/3" />
                  </div>
                </div>
                <div className="">
                  {response.map(({ Poster, Title, Type, Year }, index) => (
                    <div className="w3-col s5" key={index}>
                      <div className="w3-card whole">
                        <div className=" text">
                          <div className=" texth">
                            <h3 className="w3-center un4">{Title}</h3>
                          </div>
                          <div className="flex justify-around">
                            <p className="w3-center un5">{Type}</p>
                            <p className="w3-center un5">{Year}</p>
                          </div>
                          <div className="text-center mt-2 mb-1 ">
                            <button
                              type="submit"
                              id="button"
                              className="onebutton"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <style jsx>{`
            .w3-col {
              float: none !important;
            }
            .closed {
              display: none;
            }
            .open {
              display: block;
            }
            .full {
              overflow: scroll;
            }
            .w3-modal-content {
              background-color: #7e685a !important;
            }
            .w3-card {
              box-shadow: none;
            }
            .w3-col.s5 {
              display: inline-block;
              margin: 2.5%;
              width: 45%;
            }
            .texth {
              max-height: 80px;
              overflow: hidden;
            }
            .text {
              height: 150px;
              background-color: #fbf6f2;
            }
            .w3-modal {
              padding-top: 70px;
            }
            .w3-button:hover {
              color: #000 !important;
              background-color: transparent !important;
            }
            .w3-button {
              color: #fbf6f2;
            }
            h3 {
              font-family: "Bodoni Moda", serif;
              font-size: calc(18px + 3 * (100vw - 900px) / 1000);
              line-height: 1.2 !important;
            }
            .aaa {
              font-family: "Bodoni Moda", serif;
            }
            p {
              font-family: "ABeeZee", sans-serif;
            }
            @media screen and (max-width: 500px) {
              .w3-col.s5 {
                display: block;
                margin: 3% auto;
                width: 70%;
                border-radius: 1em;
              }
            }
            @media screen and (max-width: 400px) {
              .w3-col.s5 {
                display: block;
                margin: 3% auto;
                width: 90%;
                border-radius: 1em;
              }
            }
          `}</style>
        </div>
      )}
    </>
  );
}
