
import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import { Header } from 'semantic-ui-react';

function App() {
  const [activities, setactivities]=useState([]);
  useEffect(()=>{
    axios.get('http://localhost:5000/api/activities').then(response =>{
      setactivities(response.data)
    })
  },[])

  
 
  return (

<div>
    <Header as='h2' icon='users' content='Reactivities'/>
    <ul>{activities.map((activity : any)=>(
      
      <li key={activity.Id}>
        {activity.title}
      </li>
    ))}</ul>
    </div>
  )
}

export default App
