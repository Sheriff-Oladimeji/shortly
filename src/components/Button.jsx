

const Button = ({style, value}) => {
  return (
      <button className={`${style} bg-Cyan text-[#fff] text-center`}>{ value}</button>
  )
}

export default Button