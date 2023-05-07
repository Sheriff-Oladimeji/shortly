

const Button = ({style, value}) => {
  return (
      <button className={`${style} bg-Cyan text-[#fff] py-2 text-center`}>{ value}</button>
  )
}

export default Button