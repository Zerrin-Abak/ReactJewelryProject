import React from 'react'
import { Link } from 'react-router-dom'
import MainPagePhoto from "../assets/photo_4.jpg"
import "../styles/Home.css"

function Home() {
  return (
    <div className='main-page' style={{backgroundImage:`url(${MainPagePhoto})`}}>
      <div className='order'>
        <Link to={"/menu"}>
        <button>SİPARİŞ VER</button>
        </Link>
      </div>
    </div>
  )
}

export default Home