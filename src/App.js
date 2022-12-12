import axios from 'axios';
import React, { useState } from 'react';
import './App.css';

function App() {

  const [data,setData] = useState({})
  const [location,setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=07def91a1c17cd769f57a141649b3e8e`;
  
  
  const searchLoaction = (Event) => {
    if(Event.key=== 'Enter'){
      axios.get(url).then((Response)=>{
        setData(Response.data)
        console.log(Response.data)
      })
      setLocation('')
    }
  }

  

  return (
    <div className="app">
      <div className='search'>
        <input 
        value={location}
        onChange={Event => setLocation(Event.target.value)}
        onKeyPress={searchLoaction}
        placeholder='Enter Loaction'
        type="text" />
      </div>
      <div className='container'>
        <div className='top'>
          <div className='location'>
            <p>{data.name}</p>
          </div>
          <div className='temp'>
            {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null }
            
          </div>
          <div className='description'>
          {data.weather ? <p>{data.weather[0].main}</p> : null }
            
          </div>

        </div>

        {data.name != undefined && 


        <div className='bottom'>
          <div className='feels'>
          {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°F</p> : null }
            
            
            <p>Feels Like</p>
          </div>
          <div className='humadity'>
          {data.main ? <p className='bold'>{data.main.humidity}%</p> : null }
            
            <p>Humidity</p>
          </div>
          <div className='wind'>
          {data.wind ? <p className='bold'>{data.wind.speed} MPH</p> : null }

            
            <p>Wind Speed</p>
          </div>
        </div>
        }

      </div>
    </div>
  );
}

export default App;
