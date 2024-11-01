import React from 'react'
import { useGetImages } from './quries'
import { useGlobalContext } from './context';

const Gallery = () => {
  const {seachquery}=useGlobalContext()

  const {data,isLoading,isError}=useGetImages(seachquery);
  

  if(isLoading){
    return (
      <section className='image-container'>
        <h4>Loading....</h4>
      </section>
    )
  }

  if(isError){
    return (
      <section className='image-container'>
        <h4>There was an Error...</h4>
      </section>
    )
  }

  if(data.results.length < 1){
    return (
      <section className='image-container'>
        <h4>There no data found...</h4>
      </section>
    )
  }
  return (
    <section className='image-container'>
      {
        data?.results?.map((item)=>{
          return (
            <img src={item?.urls?.regular} key={item.id} alt={item.description} className='img'/>
          )
        })
      }
    
  </section>
  )
}

export default Gallery
