
const Button = ({ textContent, width, display }) => {
    return (
        <button className={`bg-BlueC text-white rounded-full 
        py-2 px-6 font-Poppins_SemiBold
        hover:bg-BlueC/70 flex mx-auto justify-center
        ${width && width} ${display && display}`}>
            {textContent}
        </button>
    )
}

export default Button