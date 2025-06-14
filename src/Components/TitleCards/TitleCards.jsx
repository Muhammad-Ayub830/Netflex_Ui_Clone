import React, { useEffect, useState } from 'react'
import './TitleCards.css'
import cards_dat from '../../assets/cards/Cards_data'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
const TitleCards = ({title,category}) => {
  const cardsRef = useRef()
  const [apiData,setapidata] = useState([])
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYmQzYjU2OThhMmM5MTk2M2YyNzkyOTk2Y2MzN2M5ZSIsIm5iZiI6MTc0OTc5OTQzNi45NTM5OTk4LCJzdWIiOiI2ODRiZDIwYzNmODNhN2E0MjFiYjQzNjkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.VSWEC-e-M5xs11g-7yprGY9vCCyw6HsgAxtVMnzHnVw'
    }
  };
  
 
  const handleWheel = (event) => {
    event.preventDefault()
    cardsRef.current.scrollLeft += event.deltaY
 
  }
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setapidata(res.results))
    .catch(err => console.error(err));
    cardsRef.current.addEventListener('wheel', handleWheel)
    console.log(apiData)
  }, [])
  return (
    <div className='title-cards'>
      <h2 className=''>{title?title:"Popular on Neflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {
          apiData.map((card, index) => {
            return <Link to={`/player/${card.id}`}> <div className="card" key={index}>
              <img src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path} alt="" />
              <p> {card.original_title} </p>
            </div></Link>
          })
        }
      </div>

    </div>
  )
}

export default TitleCards
