import React from 'react';
import classes from './MyButton.module.css'


const MyButton = ({children, style, ...props}) => {

    return (
        <button {...props} className={classes.btn} style={style}>
            {children}
        </button>
    );
};

export default MyButton;