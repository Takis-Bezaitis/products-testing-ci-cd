type ButtonProps = {
  buttonText: string;
  color: string;
  width: string;
}

const Button = ({buttonText, color, width}: ButtonProps) => {
  return (
    <button 
        className={`${color} ${width} text-center rounded-md cursor-pointer`}
        >
            {buttonText}
    </button>
  )
}

export default Button