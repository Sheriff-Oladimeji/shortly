

const Card = ({icon, title, content}) => {
  return (
      <div>
          <img src={icon} alt="icon" />
          <h4>{title}</h4>
          <p>{content}</p>
   </div>
  )
}

export default Card