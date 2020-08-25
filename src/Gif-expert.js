import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';

export const GifExpertApp = () => {
  //   categories = ['One Punch', 'Fifa 2020'];

  const [categories, setCategories] = useState(['Bascket']);

  const handleArr = () => {
    setCategories([...categories, 'Hola']);
    // setCategories((categorias) => [...categorias, 'Hola']);
  };

  return (
    <>
      <h2>GifExpertApp</h2>
      <hr />
      <AddCategory setCategories={setCategories} />
      <ol>
        {categories.map((cat, index) => {
          return <GifGrid key={cat} category={cat} />;
        })}
      </ol>
    </>
  );
};
