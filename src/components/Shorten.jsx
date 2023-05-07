import Button from "./Button"


const Shorten = () => {
  return (
    <section className="w-[90%] md:w-[80%] mx-auto bg-DarkViolet py-8 my-8 rounded-md">
      <form className="w-[90%] flex flex-col md:flex-row mx-auto gap-8">
        <input
          type="text"
          className="p-4  border w-full md:w-3/4 rounded-md"
          placeholder="Shorten a link here..."
        />
        <Button style={`py-4 md:w-1/4 rounded-md`} value={"Shorten It!"} />
      </form>
    </section>
  );
}

export default Shorten