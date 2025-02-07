"use client";

import React from "react";
import { useSwiper } from "swiper/react";
import { PiCaretLeft, PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

const WorkSliderButton = ({ containerStyles, btnStyles, iconsStyles }) => {
  const swiper = useSwiper();
  return (
    <div className={containerStyles}>
      <button className={btnStyles} onClick={() => swiper.slidePrev()}>
        <PiCaretLeftBold className={iconsStyles} />
      </button>
      <button className={btnStyles} onClick={() => swiper.slideNext()}>
        <PiCaretRightBold className={iconsStyles} />
      </button>
    </div>
  );
};

export default WorkSliderButton;
