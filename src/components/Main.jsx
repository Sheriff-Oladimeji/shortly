
import { working } from "../assets"
const Main = () => {
  return (
    <main className="w-full flex  flex-col-reverse md:flex-row m-0">
      <div className="mx-auto md:ml-[10%]">
        <h1>More than just shorter links</h1>
        <p>
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
      </div>
      <img src={working} alt="" />
    </main>
  );
}

export default Main