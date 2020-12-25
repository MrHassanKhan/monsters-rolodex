import React from 'react';
import './search-box.style.css';

export const SearchBox = ({name, placeholder, handleChange}) => (
    <input className="search-box" type="text" name={name} placeholder={placeholder}
     onChange={handleChange} />
)
