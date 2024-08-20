import { useState } from "react";
import { IconArrowLeft, IconArrowRight } from "../components/Icons/Icons";

export function useSlider(categories) {
  const innerWidth = window.innerWidth;
  const [currentIndex, setCurrentIndex] = useState(1);
  const [slidesPerPage, setSlidesPerPage] = useState(innerWidth < 430 ? 4 : innerWidth < 1440 ? 8 : 10); 
  const startIndex = ((currentIndex - 1) * slidesPerPage)
  const endIndex = (startIndex + slidesPerPage);
  const quantityPages = Math.ceil(categories.length / slidesPerPage);
  const btnLeft = () => {
    return (
      <button
        title='Anterior'
        className={'prev-button ' + (currentIndex === 1 ? 'disabled' : '')}
        disabled={currentIndex === 1}
        onClick={() => setCurrentIndex(currentIndex - 1)}
      >
        <figure>
          <IconArrowLeft />
        </figure>
      </button>
    )
  }
  const btnRight = () => {
    return (
      <button
        title='Siguiente'
        className={'next-button ' + (currentIndex === quantityPages ? "disabled" : '')}
        disabled={currentIndex === quantityPages}
        onClick={() => {
        setCurrentIndex(currentIndex + 1);
      }}>
        <figure>
          <IconArrowRight />
        </figure>
      </button>
    )
  }
  return { startIndex, endIndex, btnLeft, btnRight, setSlidesPerPage }
}