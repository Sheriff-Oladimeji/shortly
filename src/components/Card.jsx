

const Card = ({icon, title, content}) => {
  return (
      <div className="bg-[#fff] w-[100%] relative">
          <img src={icon} alt="icon" className="absolute" />
          <h4>{title}</h4>
          <p>{content}</p>
   </div>
  )
}

export default Card