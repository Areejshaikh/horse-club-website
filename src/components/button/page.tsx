interface tProps {
    text: string,
    colorType: string; // Define a prop to determine color type

}



function Buttons({ text, colorType }: tProps) {

    let buttonColor;

    if (colorType === 'primary') {
        buttonColor = 'bg-gradient-to-br from-gray-400 to-gray-800';
    } else if (colorType === 'secondary') {
        buttonColor = 'bg-gradient-to-br from-pink-400 to-white-950';
    } else if(colorType ===  'Tertiary' ){
        buttonColor = 'bg-white text-gray-900'

    }else {
        buttonColor = 'bg-pink-900'; // Default color
    }

    return (


        <button
            className={`mt-8 h-12 w-48 font-semibold 
                 text-white rounded-md hover:shadow-sm hover:shadow-white p-0 md:p-2 ${buttonColor}`}
        >
            {text}
        </button>
    )
}
export default Buttons