const Button = ({text, onClick, cssClass}) => {
    return (
        <button
            className={cssClass}
            onClick={onClick}
        >
            {text}
        </button>
    )
}

export default Button