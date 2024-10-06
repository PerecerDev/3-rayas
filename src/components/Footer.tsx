import { useState, useEffect } from 'react'
import Player from './Player'

type footerProps = {
    turn: string
    playerWinner: string | null

}

export default function Footer({ turn, playerWinner }: footerProps){

    const [winsReact, setWinsReact] = useState(0)
    const [winsAngular, setWinsAngular] = useState(0)

    useEffect(() => {
        if (playerWinner === 'react') {
            setWinsReact(prevWins => prevWins + 1);
        } else if (playerWinner === 'angular') {
            setWinsAngular(prevWins => prevWins + 1);
        }
    }, [playerWinner]);


    return(
        <footer className=' flex gap-4'>

            <Player name='react' wins={winsReact} turn={turn=='react' ? true : false} isWinner={playerWinner=='react' ? true : false} />

            <Player name='angular' wins={winsAngular} turn={turn=='angular' ? true : false} isWinner={playerWinner=='angular' ? true : false} />

        </footer>
    )
}