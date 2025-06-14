import React, { useEffect, useState } from 'react'
import './Player.css'
import Back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'
const Player = () => {
  const navigate = useNavigate()
 const {id} = useParams()
  const [apiData,setapidata] = useState({
    name:"",
    key:"",
    published_at:"",
    type:"",
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYmQzYjU2OThhMmM5MTk2M2YyNzkyOTk2Y2MzN2M5ZSIsIm5iZiI6MTc0OTc5OTQzNi45NTM5OTk4LCJzdWIiOiI2ODRiZDIwYzNmODNhN2E0MjFiYjQzNjkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.VSWEC-e-M5xs11g-7yprGY9vCCyw6HsgAxtVMnzHnVw'
    }
  };
  useEffect(()=>{
  
    
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(res => res.json())
      .then(res => setapidata(res.results[0]))
      .catch(err => console.error(err));
  },[])
  return (
    <div className='player'>
      <img src={Back_arrow_icon} onClick={()=>{navigate(-2)}} />
      <iframe src={`https://www.youtube.com/embed/${apiData.key}`}
      title='trailer'
      frameborder="0"
      width='90%'
      height='90%'
      allowFullScreen
      ></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)} </p>
        <p>{apiData.name} </p>
        <p>{apiData.type  } </p>
      </div>
    </div>
  )
}

export default Player
