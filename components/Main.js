import React from "react";

export default function Main() {
  return (
    <>
      <div className="  blog-container flex flex-wrap w-full bg-red-900 justify-evenly">
        <div className = "bg-blue-300 box ">
          <div className="w3-col s3 blog">
            <div className="w3-card whole">
              <img src="images/pic1.jpg" alt="" />
              <div className=" text">
                <div className=" texth">
                  <h3 className="w3-center un4">
                    The Witcher of aurther and merlin
                  </h3> 
                </div>
                <div className="flex justify-around">
                  <p className="w3-center un5">Episode</p>
                  <p className="w3-center un5">2013</p>
                </div>
                <div className="text-center mt-2 mb-1 ">
                  <button type="submit" id="button" className="onebutton">
                    Nominate
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className = "bg-blue-400 box">
            <div className="w3-col s3 blog">
              <div className="w3-card whole">
                <img src="images/pic1.jpg" alt="" />
                <div className=" text">
                  <div className="texth">
                    <h3 className="w3-center un4">
                      The Witcher 
                    </h3> 
                  </div>
                  <div className="flex justify-around">
                    <p className="w3-center un5">Episode</p>
                    <p className="w3-center un5">2013</p>
                  </div>
                  <div className="text-center mt-2 mb-1 ">
                    <button type="submit" id="button" className="onebutton">
                      Nominate
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className = "bg-blue-600 box">
            <div className="w3-col s3 blog">
              <div className="w3-card whole">
                <img src="images/pic1.jpg" alt="" />
                <div className=" text">
                  <div className="texth">
                    <h3 className="w3-center un4">
                      The Witcher 
                    </h3> 
                  </div>
                  <div className="flex justify-around">
                    <p className="w3-center un5">Episode</p>
                    <p className="w3-center un5">2013</p>
                  </div>
                  <div className="text-center mt-2 mb-1 ">
                    <button type="submit" id="button" className="onebutton">
                      Nominate
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className = "bg-blue-700 box">
            <div className="w3-col s3 blog">
              <div className="w3-card whole">
                <img src="images/pic1.jpg" alt="" />
                <div className=" text">
                  <div className="texth">
                    <h3 className="w3-center un4">
                      The Witcher 
                    </h3> 
                  </div>
                  <div className="flex justify-around">
                    <p className="w3-center un5">Episode</p>
                    <p className="w3-center un5">2013</p>
                  </div>
                  <div className="text-center mt-2 mb-1 ">
                    <button type="submit" id="button" className="onebutton">
                      Nominate
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className = "bg-blue-800 box">
            <div className="w3-col s3 blog">
              <div className="w3-card whole">
                <img src="images/pic1.jpg" alt="" />
                <div className=" text">
                  <div className="texth">
                    <h3 className="w3-center un4">
                      The Witcher 
                    </h3> 
                  </div>
                  <div className="flex justify-around">
                    <p className="w3-center un5">Episode</p>
                    <p className="w3-center un5">2013</p>
                  </div>
                  <div className="text-center mt-2 mb-1 ">
                    <button type="submit" id="button" className="onebutton">
                      Nominate
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className = "bg-blue-900 box">
            <div className="w3-col s3 blog">
              <div className="w3-card whole">
                <img src="images/pic1.jpg" alt="" />
                <div className=" text">
                  <div className="texth">
                    <h3 className="w3-center un4">
                      The Witcher 
                    </h3> 
                  </div>
                  <div className="flex justify-around">
                    <p className="w3-center un5">Episode</p>
                    <p className="w3-center un5">2013</p>
                  </div>
                  <div className="text-center mt-2 mb-1 ">
                    <button type="submit" id="button" className="onebutton">
                      Nominate
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>

      <style jsx>{`
        .w3-col.s3 {
          width: 270px;
        }
        img {
          height: 350px;
          width: 270px;
        }
        @media screen and (max-width:500px){
        .w3-col.s3 {
          width: 290px;
        }
        img {
          height: 370px;
          width: 290px;
        }
        }
        .onebutton {
          font-family: "ABeeZee";
          color: #1a202c;
          font-size: 15px;
          padding: 4px 14px;
          border-top: 1px solid #1a202c;
          border-right: 1px solid #1a202c;
          border-bottom: 1px solid #1a202c;
          border-top-right-radius: 50%;
          border-bottom-right-radius: 50%;
        }
        .onebutton:hover,
        .onebutton:focus {
          border-top: 1px solid #808080;
          border-right: 1px solid #808080;
          border-bottom: 1px solid #808080;
          color: #808080;
        }
      `}</style>
    </>
  );
}
// export default class Main extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         picture: [],
//         title:[],
//         type:[],
//         year:[]
//       };

//     }

//     async componentDidMount() {

//         let url = `http://www.omdbapi.com/?apikey=2d34609c&s=merlin`;

//          let response = await fetch(url);
//          let result = await response.json();
//          console.log(result);
//          if(result.Response  == 'True'){
//               let pictureArray = [];
//               let titleArray = [];
//               let typeArray = [];
//               let yearArray = [];
//               let resultArray = result.Search;
//               let resultArrayLength = resultArray.length;
//               for( let i=0; i<resultArrayLength; i++){
//                 let moviePicture = resultArray[i].Poster;
//                 let movieTitle = resultArray[i].Title;
//                 let movieType = resultArray[i].Type;
//                 let movieYear = resultArray[i].Year;
//                 console.log(movieTitle);
//                 console.log(movieType);
//                 console.log(movieYear);
//                 pictureArray.push(moviePicture);
//                 titleArray.push(movieTitle);
//                 typeArray.push(movieType);
//                 yearArray.push(movieYear);

//               }
//               this.setState({
//                   picture:pictureArray,
//                   title:titleArray,
//                   type:typeArray,
//                   year:yearArray,
//               })
//          }
//          else if(result.Response == 'False' ){
//            if(result.Error == "Movie not found!"){
//              alert("Movie not found, Search again");
//            }
//          }
//          else{
//            alert("Error!!!")
//          }
//       }

//       render() {
//         let arrayData = [];
//         for (let j = 0; j < 10; j++){

//       arrayData.push(

//         <div className="w3-card whole">
//           <img className="img" src={this.state.picture[j]} alt="" />
//           <div className="w3-container text">
//           <h4 className="w3-center un4">{this.state.title[j]}</h4>
//           <p className="w3-center un5">{this.state.type[j]}</p>
//           <p className="w3-center un5">{this.state.year[j]}</p>
//           </div>
//       </div>

//       )

//         }
//            return(
//               arrayData
//             )

//       }
//     }
