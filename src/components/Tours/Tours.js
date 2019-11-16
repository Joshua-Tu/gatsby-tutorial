import React from 'react';
import SingleTour from './SingleTour';

const Tours = ({ tours }) => {
  console.log(tours);

  return (
    <div>
      this is tours component
      <SingleTour />
    </div>
  );
};

export default Tours;
