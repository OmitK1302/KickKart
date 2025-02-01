const Button = ({label, iconURL, backgroundColor = "bg-coral-red",  borderColor = "border-coral-red", textColor = "text-white", fullWidth}) => {
  return (
    <button className={`font-montserrat border flex justify-center items-center px-7 py-4 rounded-full ${backgroundColor} ${borderColor} ${textColor} gap-2 ${(fullWidth) && "w-full"}`}>
        <p>{label}</p>

        {(iconURL) && <img src={iconURL}/>}
    </button>
  )
}

export default Button