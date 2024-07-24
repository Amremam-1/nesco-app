import React from 'react'
import { useState } from 'react';

const useFixedHeader = (scrY) => {
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const showNavHandler = () => {
    // console.log(window.scrollY);
    if (window.scrollY > scrY) {
      setIsHeaderFixed(true);
    } else {
      setIsHeaderFixed(false);
    }
  };

  window.addEventListener('scroll', showNavHandler);

  return [isHeaderFixed]
}

export default useFixedHeader