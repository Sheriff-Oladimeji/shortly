import Button from "./Button";

const Shorten = () => {
  return (
    <section className="shorten-bg w-[90%] md:w-[80%] mx-auto bg-DarkViolet py-8 my-8 rounded-md" >
      <div></div>
      <form className="w-[90%] flex flex-col md:flex-row mx-auto gap-4 md:gap-8">
        <input
          type="text"
          className="p-4  border-none w-full md:w-3/4 rounded-md outline-none placeholder:font-semibold placeholder:text-GrayishViolet"
          placeholder="Shorten a link here..."
        />
        <Button
          style={`py-4 md:w-1/4 rounded-md font-bold`}
          value={"Shorten It!"}
        />
      </form>
    </section>
  );
};

export default Shorten;
