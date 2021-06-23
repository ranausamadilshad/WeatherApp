import React,{useState,useEffect} from 'react';
import './css/style.css';

const TempApp = () => {
    
     const [city, setCity] = useState(null);
     const [search, setSearch] = useState('Lahore');

     useEffect(() => {
         const fetchApi=async () => {
             const url=`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=d62d9c4734466b2d348118061c50c9b1`
            const response=await fetch(url);
            const resJson= await response.json();
            setCity(resJson.main);
         }
         fetchApi();
     },[search])




    return (
        <>
       <div className="box">
              <div className="inputData">
                   <input type="search" value={search} className="inputField" onChange={(event=>{setSearch(event.target.value)})}></input>
               </div>   
         {!city?(
             <p>No Data Found</p>
         ):
         <div>
            <div className="info">
              <h2 className="location">
                  <i className="fas fa-street-view"></i> {search}
              </h2>
              <h1 className="temp">
                  {city.temp} °Cel
              </h1>
              <h3 className="tempin-max">
                   Min  {city.temp_min} °Cel | Max {city.temp_max} °Cel
              </h3>
            </div> 
            <div className="wave -one"></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>
        </div>
        }
         </div> 
        </>
    )
}

export default TempApp;
