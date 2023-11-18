import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import axios from "axios";
import { useState } from "react"
import { useEffect } from "react"

function App() {
const apiKey ="c940e77184e07b3290733ca694caf346"
const [inputCity, setInputCity] = useState("")
const [data, setData] = useState({}) //function for API

const getWeatherdetails = (city) =>{    // API calling
  if(!city)  return
  const apiURL = "https://api.openweathermap.org/data/2.5/weather?q="+ city + "&appid=" + apiKey
    axios.get(apiURL). then((res)=>{
      console.log("response",res.data)
      setData(res.data)

    }).catch((err) => {
      console.log("err",err)
    })
}

const handleChangeInput = (e) => {
 console.log("value", e.target.value) 
setInputCity(e.target.value)
}

const  handleSearch = () => {
  getWeatherdetails(inputCity)
}

useEffect(() => {
  getWeatherdetails("dhaka")
}, [])

  return (
    <div className="col-md-12">
      <div className="Weatherbg">
        <h1 className="heading"> Weather App</h1>

        <div className="d-grid gap-3 col-4 mt-4">
          <input type="text" className="form-control" onChange={handleChangeInput}/>
          <button className="btn btn-danger" type="button"
          onClick={handleSearch}
          >Search</button>
        </div>
    
      </div>

      <div className="col-md-12 text-center mt-5">
        <div className="shadow rounded weatherResultBox">

          <img className="weatherIcon"
            src="https://cdn.jim-nielsen.com/ios/512/weather-2021-12-07.png" />

        <h5 className="city">
          {data?.name}
        </h5>
        <h6 className="temp">{((data?.main?.temp)-273.15).toFixed(2)}°C</h6>

        </div>

      </div>
    </div>

  );
}

export default App;
