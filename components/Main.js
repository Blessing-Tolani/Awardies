
import { useAlert } from 'react-alert'
import {useEffect} from "react";
import {useState} from "react";

export default function Main({topic,handler}) { 
  var lit;
  const alert = useAlert();
  let data = [];
  let listArray = [];
  let result = topic;
  lit = 500;
 
  function getDetails(num){
      let information = data[num];
      listArray.push(information);
      handler(listArray);

  }
 
 
 
  if(result.Response  == 'True'){
    let resultArray = result.Search;
    let resultArrayLength = resultArray.length;
    for( let i=0; i<1; i++){
      data.push(resultArray[i]);
      }
   
      }
     
      else if(result.Response == 'False' ){
        if(result.Error == "Movie not found!"){
          alert.show("Movie not found, Search again");
        }
      }
      else{
        
      }

      return(
      <div className="  blog-container flex flex-wrap w-full  justify-evenly">
        {
        data.map(
          ({Poster, Title, Type, Year}, index) => 
          <div className = " box " key={index}>
          <div className="w3-col s3 blog">
            <div className="w3-card whole">
                <img src={Poster} alt="Movie poster" />
                <div className=" text">
                  <div className=" texth">
                    <h3 className="w3-center un4">
                      {Title}
                    </h3> 
                  </div>
                  <div className="flex justify-around">
                    <p className="w3-center un5">{Type}</p>
                    <p className="w3-center un5">{Year}</p>
                  </div>
                  <div className="text-center mt-2 mb-1 ">
                    <button type="submit" id="button"  onClick = { () => getDetails(index)} className="onebutton">
                      Nominate
                    </button>
                  </div>
                </div> 
            </div>
            </div>
          </div>
        )}
       
        </div>
      
        
      )
  }
