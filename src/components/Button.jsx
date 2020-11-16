import React from 'react';
import cn from 'classnames';



const Button = ({onClick, outline, children, className}) => {

  let btnClasses = cn ('button', className, {
    'button--outline': outline
  })
    return (
        <button onClick={onClick} className={btnClasses}>{children}</button>
    )
}

export default Button;