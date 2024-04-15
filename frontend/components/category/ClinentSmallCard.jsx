"use client"
import React, {useState} from 'react'
import SmallCard from './smallCard';

function ClinentSmallCard({ title, imageSource , instructorName, instructorRole , id, status}) {
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
        instructorName={instructorName}
        instructorRole={instructorRole}
        imageSource={imageSource}
        id={id}
        status={status}
    />
  )
}

export default ClinentSmallCard