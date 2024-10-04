import Header from '@/components/Header'
import React, { useEffect, useState } from 'react'
import DetailHeader from '../components/DetailHeader'
import { useParams } from 'react-router-dom'
import { db } from './../../../configs'
import { CarImages, CarListing } from './../../../configs/schema'
import { eq } from 'drizzle-orm'
import Service from '@/Shared/Service'
import ImageGallery from '../components/ImageGallery'
import Description from '../components/Description'
import Features from '../components/Features'
import Pricing from '../components/Pricing'
import Footer from '@/components/Footer'
import Specification from '../components/Specification'
import OwnersDetail from '../components/OwnersDetail'
import FinacialCalculator from '../components/FinacialCalculator'
import MostSearchCar from '@/components/MostSearchCar'

const ListingDetail = () => {

  const {id} = useParams()
  const [carDetail,setCarDetail] = useState()

  useEffect(()=>{
    GetCarDetail()
  },[])

  const GetCarDetail=async()=>{
    const result = await db.select().from(CarListing)
    .innerJoin(CarImages,eq(CarListing.id,CarImages.carListingId))
    .where(eq(CarListing.id,id))

    const resp = Service.FormatResult(result)
    setCarDetail(resp[0]);
    
  }

  return (
    <div>
      <Header/>
      
      <div className='p-10 md:px-20'>
        <DetailHeader carDetail={carDetail}/>
        <div className='grid grid-cols-1 md:grid-cols-3 w-full mt-10 gap-5'>
          <div className='md:col-span-2'>
            <ImageGallery carDetail={carDetail}/>
            <Description carDetail={carDetail}/>
            <Features features={carDetail?.features}/>
            <FinacialCalculator carDetail={carDetail}/>
          </div>
          <div>
            <Pricing carDetail={carDetail}/>
            <Specification carDetail={carDetail}/>
            <OwnersDetail carDetail={carDetail}/>
          </div>
        </div>

        <MostSearchCar/>
      </div>
      <Footer/>
    </div>
  )
}

export default ListingDetail
