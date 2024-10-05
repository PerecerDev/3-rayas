import { useState } from "react"
import Header from "./components/Header"
import MainSection from "./components/MainSection"

function App() {

  const [playingGame, setPlayingGame] = useState(true)

  return (
    <>
      <article className="flex flex-col gap-44 w-full h-screen items-center bg-gradient-to-b from-blue-950 via-blue-600 to-blue-950">
  
        <Header playingGame={playingGame}/>
        
        <MainSection playingGame={playingGame} setPlayingGame={setPlayingGame}/>

      </article>
    </>
  )
}

export default App
