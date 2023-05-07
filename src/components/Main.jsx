
import { working } from "../assets"
import Button from "./Button";
const Main = () => {
  return (
    <main className="w-[90%] md:w-[80%] flex  flex-col-reverse md:flex-row mx-auto items-center justify-between">
      <div className="flex flex-col space-y-4">
        <h1 className="text-5xl text-VeryDarkBlue font-bold">More than just <br/> shorter links</h1>
        <p className="max-w-md">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
              </p>
              <Button value={"Get Started"} style={'rounded-full w-[200px]'}/>
      </div>
      <img src={working} alt="" className=" relative w-[200%] md:w-[60%] -mr-[20%]" />
    </main>
  );
}

export default Main