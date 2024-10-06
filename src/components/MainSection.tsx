import Board from "./Board"
import StartButton from "./StartButton"

type MainSectionProps = {
    playingGame: boolean
    setPlayingGame: CallableFunction
    turn: string
    setTurn: CallableFunction
    winner: number[] | null
    setWinner: CallableFunction
    setPlayerWinner: CallableFunction
  }

export default function MainSection({playingGame, setPlayingGame, turn, setTurn, winner, setWinner, setPlayerWinner}: MainSectionProps){

    const handleStartClick = () => setPlayingGame(!playingGame)

    

    return(
        <section>
          {
            playingGame
            ? <StartButton onClick={handleStartClick} />
            : <Board turn={turn} setTurn={setTurn} winner={winner} setWinner={setWinner} setPlayerWinner={setPlayerWinner}/>
          }
          
        </section>
    )
}