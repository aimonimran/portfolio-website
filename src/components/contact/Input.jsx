import React from 'react';

const Input = ({ name, value, placeholder }) => {
    return ( 
        <input name={name} value={value} type="text" placeholder={placeholder} required />
    );
}
 
export default Input;