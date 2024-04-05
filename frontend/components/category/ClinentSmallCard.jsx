"use client"
import React, {useState} from 'react'
import SmallCard from './smallCard';

function ClinentSmallCard({ title, subtitle, imageSource , productId}) {
    const [hover,setHover] = useState(false);

    const handleHoverIn = () => {
        setHover(true);
      };
    const handleHoverOut = () => {
        setHover(false);
    };
  return (
    <SmallCard 
        hover = {hover}
        handleHoverIn={handleHoverIn}
        handleHoverOut={handleHoverOut}
        title={title}
        subtitle={subtitle}
        imageSource={imageSource}
        productId={productId}
    />
  )
}

export default ClinentSmallCard