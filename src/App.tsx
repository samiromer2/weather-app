import { useState ,useEffect } from 'react'
import './App.css'

function App() {const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://api.weatherapi.com/v1/current.json?key=94a34ad6160b4ad48ae154328250601&q=Uganda&aqi=no')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
     
      {data ? 
      <>

      <div> {JSON.stringify(data, null, 1)} </div>
      <div>{data.location.name}</div>
      <div>{data.location.tz_id}</div>
      <div>{data.location.localtime}</div>
      </> 
      : 'Loading...'}
    </div>
  );
}

export default App
