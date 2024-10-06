import Board from "./Board"
import StartButton from "./StartButton"

type MainSectionProps = {
    playingGame: boolean
    setPlayingGame: CallableFunction
    turn: string
    setTurn: (newTurn: string) => void
  }

export default function MainSection({playingGame, setPlayingGame, turn, setTurn}: MainSectionProps){

    const handleStartClick = () => setPlayingGame(!playingGame)

    return(
        <section>
          {
            playingGame
            ? <StartButton onClick={handleStartClick} />
            : <Board turn={turn} setTurn={setTurn}/>
          }
          
        </section>
    )
}