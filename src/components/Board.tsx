import Square from "./Square"

type boardProps = {
    turn: string
    setTurn: CallableFunction

    winner: number[] | null
    setWinner: CallableFunction
    setPlayerWinner: CallableFunction

}

let board = new Array(9).fill(null)

export default function Board({ turn, setTurn, winner, setWinner, setPlayerWinner}: boardProps){
    
    function handleClick(){
       const newBoard = new Array(9).fill(null) 
       board = newBoard
       setTurn('react')
       setWinner(null)
       setPlayerWinner(null)
    }

    return(
        <div className="flex flex-col gap-5">
            <div className="grid grid-cols-3 gap-3">
                {
                    board.map((item, index) => (
                        <Square key={index} index={index} turn={turn} setTurn={setTurn} board={board} winner={winner} setWinner={setWinner} setPlayerWinner={setPlayerWinner} >
                            {item}
                        </Square>
                    ))
                }
            </div>
            <div className="min-h-12">
                {   
                    (winner && winner.length > 0 || turn === null) && (

                        <div className="w-full text-center cursor-grab border text-blue-950 hover:text-blue-800 border-blue-700 py-2 rounded-xl bg-gradient-to-br from-blue-200 to-blue-300 hover:from-blue-100 hover:to-blue-300 shadow-[0px_0px_100px_0px] shadow-blue-600 hover:shadow-blue-500">
                            <button className="text-2xl font-black uppercase text-center"
                                onClick={handleClick}
                            >
                                Jugar otra partida
                            </button>
                        </div>
                    )
                }
                
            </div>
        </div>
    
    )
}