import Card from "./Card";
import { cards } from "./data";
const Statistics = () => {
  return (
    <section className="w-[90%] md:w-[80%] mx-auto">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-4xl font-bold text-DarkViolet">Advanced Statistics</h2>
        <p className="font-normal text-GrayishViolet max-w-md text-center">
     
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-12">
        {cards.map((card)=> (
          <Card key={card.id} icon={card.icon} title={card.title} content={card.content} />
        ))}
      </div>
    </section>
  );
}

export default Statistics