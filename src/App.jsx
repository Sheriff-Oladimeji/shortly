import { Main, Navbar, Shorten, Statistics } from "./components";

const App = () => {
  return (
    <div className="text-[18px]">
      <Navbar />
      <Main />

      <div className="container-bg">
        <Shorten />
        <Statistics />
      </div>
    </div>
  );
};

export default App;
