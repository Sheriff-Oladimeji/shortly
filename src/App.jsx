import { Main, Navbar , Shorten} from "./components"

const App = () => {
  return (
    <div className="text-[18px]">
      <Navbar />
      <Main />
      <Shorten/>
    </div>
  )
}

export default App