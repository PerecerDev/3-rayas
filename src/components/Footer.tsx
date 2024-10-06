import Player from './Player'

type footerProps = {
    turn: string
}

export default function Footer({ turn }: footerProps){

    return(
        <footer className=' flex gap-4'>

            <Player name='react' wins={0} turn={turn=='react' ? true : false} />

            <Player name='angular' wins={0} turn={turn=='angular' ? true : false} />

        </footer>
    )
}