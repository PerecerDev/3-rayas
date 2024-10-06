import { ReactNode } from "react"

type SquareProps = {
    children: ReactNode
    index: number
    turn: string
    setTurn: CallableFunction
    board: string[]
    winner: number [] | null
    setWinner: CallableFunction
    setPlayerWinner: CallableFunction
}

const WINNERS = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

export default function Square( { children, index, turn, setTurn, board, winner, setWinner, setPlayerWinner }: SquareProps){

    let verdeGana = ''
    winner?.map(square => {
        if(square == index){
            verdeGana = 'verdeGana'
        }
    })

    const handleClick  = () => {
        if(!board[index] && !winner) {
            const newTurn = turn == 'react' ? 'angular' : 'react'
            setTurn(newTurn)
            
            board[index] =  turn

            const winnerCombo: number[] = []
            WINNERS.map(win => {
                if(
                    board[win[0]] != null 
                    && board[win[0]] == board[win[1]]
                    && board[win[0]] == board[win[2]]
                ){
                   winnerCombo[0] = win[0]
                   winnerCombo[1] = win[1]
                   winnerCombo[2] = win[2]
                }
            })

            if(winnerCombo.length){
                verdeGana = 'verdeGana'
                setWinner(winnerCombo)
                setPlayerWinner(turn)
            }

            const emptySquares = board.filter(square => square == null)
            if(!emptySquares.length && !winnerCombo.length){
                setTurn(null)
            }

        }
        
        
    }
    if(winner) {
        setTurn(null)
    }

    return(
        <div
            onClick={handleClick}
            className={`${children}OnBoard w-24 h-24 flex justify-center items-center text-blue-950 text-xl rounded-lg border border-slate-500 bg-slate-800 ${verdeGana} hover:bg-slate-700 hover:border-yellow-500 cursor-cell hover:shadow-[0px_0px_30px_0px] hover:shadow-yellow-200/30`}
        >
            {children ? <img className="w-10 h-10" src={`/src/assets/${children}.svg`} alt="React Logo" /> : ''}
            
        </div>
    )
}
    