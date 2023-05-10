import { Main, Navbar, Shorten, Statistics } from "./components";

const App = () => {
  return (
    <div className="text-[18px]">
      <Navbar />
      <Main />
      <Shorten />
      <Statistics />
    </div>
  );
};

export default App;
