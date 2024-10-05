import { ReactNode } from "react"

type SquareProps = {
    children: ReactNode
}

export default function Square( { children }: SquareProps){
    return(
        <div className="w-24 h-24 flex justify-center items-center text-blue-950 text-xl rounded-lg border border-white bg-gradient-to-br from-blue-200 to-blue-300 hover:from-blue-300 hover:to-blue-400 hover:border-blue-950 cursor-cell">
            {children}
        </div>
    )
}