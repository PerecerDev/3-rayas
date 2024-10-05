import HeaderStart from "./HeaderStart";
import HeaderTop from "./HeaderTop";

type HeaderProps = {
    playingGame: boolean
}

export default function Header({ playingGame }: HeaderProps) {

    return(
        <header>
          {
            playingGame
            ? <HeaderStart />
            : <HeaderTop />
          }
        </header>
    )
}