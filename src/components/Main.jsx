
import { working } from "../assets"
import Button from "./Button";
const Main = () => {
  return (
    <main className="w-[90%] md:w-[80%] flex  flex-col-reverse md:flex-row mx-auto items-center justify-between gap-6 md:gap-0 py-4">
      <div className="flex flex-col space-y-4 text-center md:text-left">
        <h1 className="text-5xl text-VeryDarkBlue font-bold mt-7 md:mt-0">
          More than just <br /> shorter links
        </h1>
        <p className="max-w-md">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <Button value={"Get Started"} style={"rounded-full w-[200px] mx-auto"} />
      </div>
      <img
        src={working}
        alt=""
        className=" relative w-[100%] md:w-[60%] md:-mr-[20%]"
      />
    </main>
  );
}

export default Main