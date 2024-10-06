import Square from "./Square"

type boardProps = {
    turn: string
    setTurn: (newTurn: string) => void
}

const board = new Array(9).fill(null)

export default function Board({ turn, setTurn}: boardProps){
    return(
        <div className="grid grid-cols-3 gap-3">
            {
                board.map((item, index) => (
                    <Square key={index} turn={turn} setTurn={setTurn}>{index}</Square>
                ))
            }
        </div>
    )
}