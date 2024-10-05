import Board from "./Board"
import StartButton from "./StartButton"

type MainSectionProps = {
    playingGame: boolean
    setPlayingGame: CallableFunction
}

export default function MainSection({playingGame, setPlayingGame}: MainSectionProps){

    const handleStartClick = () => setPlayingGame(!playingGame)

    return(
        <section>
          {
            playingGame
            ? <StartButton onClick={handleStartClick} />
            : <Board />
          }
          
        </section>
    )
}