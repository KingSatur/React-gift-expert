import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState('');

  const handlerInput = (e) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    // console.log('Submit hecho');
    if (inputValue.trim().length > 2) {
      setCategories((cat) => [inputValue, ...cat]);
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handlerSubmit}>
      <input value={inputValue} onChange={handlerInput} type='text' />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
