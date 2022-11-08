import React from 'react';
import propTypes from 'prop-types';

function Card({ data }) {
  const {
    location,
    current,
  } = data;

  return (

    <div className="bg-white p-6 mt-10 rounded-lg">
      <div className=" text-center ">
        <span className="block text-2xl font-bold text-slate-700">{location.name}</span>
        <span className="text-slate-500 text-xl font-medium">
          {`${location.region}, ${location.country}`}
        </span>
      </div>

      <div className="font-bold text-slate-600 flex mt-4 mb-2 justify-center">
        <span className="text-8xl">{current.temp_c}</span>
        <span className="text-3xl mt-2">ºC</span>
      </div>

      <div className="justify-center flex flex-col items-center text-lg">
        <img className="w-[100px]" src={current.condition.icon} alt="weather icon" />
        <span className="text-slate-700 font-meidum">{current.condition.text}</span>
      </div>
    </div>
  );
}

export default Card;
Card.propTypes = {
  data: propTypes.object,
}.isRequired;
