import ListEpisode from "./components/ListEpisode"
import BolumDetay from "./components/BolumDetay"
import ForumMain from "./components/ForumMain"
import ForumBaslikDetay from "./components/ForumBaslikDetay"

import Navbar from "./components/Navbar"
import Filter from "./components/Filter"
import React from "react"

import BolumIzle from "./components/BolumIzle"

function App() {


  return (
    <>
      <div className="flex flex-col gap-15 relative ">
        <Navbar></Navbar>
        <BolumDetay />
  <BolumIzle/>
  <ListEpisode/>
       

      </div>

     




    </>

  )
}

export default App
