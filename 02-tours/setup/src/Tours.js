import React from 'react';
import Tour from './Tour';
const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className="title">
        <h2>our tours
          <div className="underline"></div>
        </h2>
        <div>
          {tours.map((tour) => {
            return <Tour key={tour.id} {...tour} removeTour={removeTour}>;
            </Tour>
          })}
        </div>
      </div>
    </section>
  );
};

export default Tours;
