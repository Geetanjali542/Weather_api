import axios from 'axios';
import React, {  useState } from 'react'

const Weather = () => {
  const[bake, setBake] = useState("");

  
  const submitHandler = (e)=>{
    e.preventDefault()
    // instead of passing the wole event do it like this 
    const cityname = e.target[0].value
    console.log(cityname)   
    getApi(cityname)
  }
  
  const getApi = async (cityname) =>{


    try {
      
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=6ba78604e3b38b2d243912477b8f35ce`)
      console.log(response.data)
      setBake(response.data)

    } catch (error) {
      console.log(error)
      
    }
  }

  
  return (
    <>

 
   
  
    <div class="w-100 p-2 h-100 text-success  ">
    <h1 className='text-center'>Weather App </h1>  
      <nav className="bg-body-tertiary m-5  ">
        <div className="container-fluid ">
          <form className="d-flex container-fluid p-3" onSubmit={submitHandler}>
          
            <input className="form-control me-2" type="text" placeholder="Enter the placename"/>
            <button className="btn btn-outline-success" type="submit">Get Weather Details</button>
             
          </form>
          
          

          {bake && (
        <div>
          <h2>Weather in {bake.name}</h2>
          <p>Temperature: {bake.main.temp}°K</p>
          <p>Weather: {bake.weather[0].description}</p>
        </div>
      )}


      {/* or optional chaining can be done like below - the problem occurred because it does not have 
          <h2>Weather in {bake?.name}</h2>
          <p>Temperature: {bake?.main?.temp}°K</p>
          <p>Weather: {bake?.weather?.description}</p> */}
       
      
        </div>
      </nav>
    </div>

    
      
    </>
  )
}

export default Weather
