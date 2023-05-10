import { Main, Navbar, Shorten, Statistics } from "./components";

const App = () => {
  return (
    <div className="text-[18px]">
      <Navbar />
      <Main />
      <Shorten />
      <div className="w-full bg-Gray">
        <Statistics />
      </div>
    </div>
  );
};

export default App;
