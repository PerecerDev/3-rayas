
type playerProps = {
    name: string
    wins: number
    turn: boolean
    isWinner: boolean

}

export default function Player({name, wins, turn, isWinner}: playerProps){


    const turnClass = turn ? `player${name} ${name}On` : `player${name}`

    const winnerClass = isWinner ? `winnerPlayer` : ``

    return (
        <div className={`${turnClass} ${winnerClass} flex flex-col items-center p-8 rounded-lg bg-slate-950 border border-slate-900 `}>
            <div className='mb-4 '>
                <img className='w-20 h-20' src={`${name}.svg`} alt="React Logo" />
            </div>
            <span className='uppercase text-white font-semibold text-lg text-center'>
                Partidas ganadas
            </span>
            <span className='text-4xl font-bold text-orange-300'>{wins}</span>
        </div>
    )
}