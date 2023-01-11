import React from 'react'


import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function CarouselComp({  featurePhotos }) {
  return (
    <div style={{ height: '50vh' }}>
      <Carousel autoPlay={true} showStatus={false} infiniteLoop={true} dynamicHeight={true} showThumbs={false}>

        {featurePhotos && featurePhotos.map((props, index) => (
          <img
           key={index}
           style={{
            width: '100%',
            height: '50vh', color: 'white', objectFit: 'contain',
          }} src={props.url} alt='loading' />

        ))}






      </Carousel>

    </div>
  )
}

export default CarouselComp