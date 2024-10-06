import { useState } from "react"
import Header from "./components/Header"
import MainSection from "./components/MainSection"
import Footer from "./components/Footer"

function App() {

  const [playingGame, setPlayingGame] = useState(true)
  const [turn, setTurn] = useState('react')

  return (
    <>
      <article className="flex flex-col p-12 justify-between w-full min-h-screen items-center bg-gradient-to-b from-blue-950 via-blue-600 to-blue-950">
  
        <Header playingGame={playingGame}/>
        
        <MainSection playingGame={playingGame} setPlayingGame={setPlayingGame} turn={turn} setTurn={setTurn}/>

        {!playingGame ? <Footer turn={turn} /> : '' }

      </article>
    </>
  )
}

export default App
