import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { GifGridItem } from './GifGridItem';
import { getGifs } from './helpers/getGifs';
import { useFetchGifs } from './hooks/useFetchGifs';

export const GifGrid = ({ category }) => {
  //   const [images, setImages] = useState([]);

  const { data, loading } = useFetchGifs(category);

  //   Que se dispara unicamente si la categoria cambia
  //   useEffect(() => {
  //     getGifs(category).then(setImages);
  //   }, [category]);

  return (
    <>
      <h1 className='animate__animated animate__fadeIn'>{category}</h1>
      {loading && <p className='animate__animated animate__flash'>Cargando</p>}
      <div className='card-grid'>
        {data.map((img) => {
          return <GifGridItem key={img['id']} {...img} />;
        })}
      </div>
    </>
  );
};
