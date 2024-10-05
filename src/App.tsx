import Header from "./components/Header"
import StartButton from "./components/StartButton"

function App() {

  return (
    <>
      <article className="flex flex-col gap-44 w-full h-screen items-center justify-center bg-blue-950">
        
        <Header />

        <section>
          <StartButton />
        </section>

        <footer>

        </footer>

      </article>
    </>
  )
}

export default App
