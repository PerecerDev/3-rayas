import { ReactNode } from "react"

type SquareProps = {
    children: ReactNode
    turn: string
    setTurn: (newTurn: string) => void
}

export default function Square( { children, turn, setTurn }: SquareProps){

    const handleClick  = () => {
        const newTurn = turn == 'react' ? 'angular' : 'react'
        setTurn(newTurn)
    }

    return(
        <div
            onClick={handleClick}
            className="w-24 h-24 flex justify-center items-center text-blue-950 text-xl rounded-lg border border-white bg-gradient-to-br from-blue-200 to-blue-300 hover:from-yellow-100 hover:to-yellow-200 hover:border-yellow-500 cursor-cell hover:shadow-[0px_0px_30px_0px] hover:shadow-yellow-200/50"
        >
            {children}
        </div>
    )
}
    