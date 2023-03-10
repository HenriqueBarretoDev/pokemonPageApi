import React from 'react';
import './indes.css'


const Button = ({
                    title,
                    icon: Icon,
                    bgColor = 'dark',
                    containerStyle,
                    buttonStyle,
                    onClick,
                    className,
                    disabled,
                    img,
                    ...rest
                }) => {
    return (
        <div className="ContentButton">
            {Icon ? <Icon/> : null}
            <button style={buttonStyle} disabled={disabled} {...rest}>
                {title}
            </button>
        </div>
    )

}
export default Button
