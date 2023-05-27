/* eslint-disable react/prop-types */


const Card = ({icon, title, content}) => {
  return (
    <div className="bg-[#fff] w-[100%] mt-10">
      <div className="absolute  transform -translate-x-1/2 -translate-y-1/2 bg-DarkViolet rounded-full p-6 md:left-[20%] left-1/2">
        <img src={icon} alt="icon" />
      </div>
      <div className="p-8 mt-10  text-center md:text-start">
        <h4 className="font-bold text-DarkViolet">{title}</h4>
        <p className="max-w-xl text-GrayishViolet">{content}</p>
      </div>
    </div>
  );
}

export default Card