import Square from "./Square"

const board = new Array(9).fill(null)

export default function Board(){
    return(
        <div className="grid grid-cols-3 gap-3">
            {
                board.map((item, index) => (
                    <Square key={index}>{index}</Square>
                ))
            }
        </div>
    )
}