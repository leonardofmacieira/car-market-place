import { Button } from '@/components/ui/button';
import React from 'react';
import { MdOutlineLocalOffer } from "react-icons/md";

const Pricing = ({ carDetail }) => {
  return (
    <div className='p-10 rounded-xl border border-primary shadow-md'>
      <h2>Our Price</h2>
      {/* Verifica se carDetail e sellingPrice existem antes de exibir o valor */}
      {carDetail?.sellingPrice ? (
        <h2 className='font-bold text-4xl'>${carDetail.sellingPrice}</h2>
      ) : (
        <h2 className='font-bold text-4xl'>Price not available</h2>
      )}

      <Button className='w-full mt-7 bg-white border border-primary text-primary hover:bg-primary hover:text-white' size='lg'>
        <MdOutlineLocalOffer className='text-lg mr-2'/>Make an Offer Price
      </Button>
    </div>
  );
};

export default Pricing;
