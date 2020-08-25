import React from 'react';

export const GifGridItem = ({ id, title, src }) => {
  return (
    <div className='card animate__animated animate__fadeIn'>
      <img src={src} alt={title}></img>
      <p>{title}</p>
    </div>
  );
};
