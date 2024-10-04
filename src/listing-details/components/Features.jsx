import React from 'react';
import { FaCheck } from "react-icons/fa";

const Features = ({ features }) => {
  // Verifique se 'features' é um objeto válido
  if (!features || Object.keys(features).length === 0) {
    return <div>Nenhuma feature disponível.</div>;
  }

  return (
    <div className='mt-6'>
      <div className='p-5 rounded-xl border border-primary shadow-md my-7'>
        <h2 className='font-medium text-2xl'>Features</h2>
        <div className='grid grid-cols-2 md:grid-cols-3 mt-5 lg:grid-cols-4 gap-7'>
          {Object.entries(features).map(([features, value], index) => (
            <div className='flex gap-2 items-center' key={index}>
              <FaCheck className='text-lg p-1 rounded-full bg-blue-100 text-primary'/>
              <h2>{features}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
