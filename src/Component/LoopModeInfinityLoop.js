import React, { useState } from "react";
import Swiper from "react-id-swiper";
import styled from "styled-components";
import Content from "./Content";
import contentStatus from "../videoData";

const SwiperWrapper = styled.div`
  background-color: ${(props) => props.theme.bgColor};
  .swiper-container {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
    margin: 0px auto;
    overflow: auto;
    list-style: none;
    padding: 0px;
  }
  .swiper-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    transition-property: transform;
    box-sizing: content-box;
  }
  .swiper-slide {
    flex-shrink: 0;
    width: 843px;
    margin-right: 30px;
    position: relative;
    transition-property: transform;
  }
  .swiper-button-next,
  .swiper-button-prev {
    background-color: red;
    right: 10px;
    left: auto;
  }
  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    top: 50%;
    width: 50px;
    height: 50px;
    z-index: 10;
    cursor: pointer;
    background-size: 50px 50px;
    margin-top: -22px !important;
    background-position: center center;
    background-repeat: no-repeat;
  }
`;

const LoopModeInfinityLoop = () => {
  console.log("loop component function start");

  const colorBar = ["#FFC312", "#C4E538", "#12CBC4", "#FDA7DF", "#ED4C67"];

  const [swipeActiveIndex, setSwipeActiveIndex] = useState(0);
  const [videoIndex, setVideoIndex] = useState(0);
  const [virtualArray, setVirtualArray] = useState(colorBar);
  console.log(virtualArray);

  const params = {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: false,
    runCallbacksOnInit: false,
    on: {
      init: (swiper) => {
        console.log("init swiper");
      },
      slideChange: (swiper) => {
        console.log("active index: ", swiper.activeIndex);
        console.log("real index: ", swiper.realIndex);
      },
      slideNextTransitionEnd: (swiper) => {
        console.log("next slide");
        setVideoIndex((videoIndex) => videoIndex + 1);
        setSwipeActiveIndex(swiper.activeIndex);
        setVirtualArray((virtualArray) => {
          if (virtualArray.length > 20) {
            virtualArray.shift();
          }
          return virtualArray.concat("#EE5A24");
        });
      },
      slidePrevTransitionEnd: (swiper) => {
        console.log("prev slide");
        setVideoIndex((videoIndex) => videoIndex - 1);
        setSwipeActiveIndex(swiper.activeIndex);
      }
    }
  };

  console.log("before swiper render");
  console.log("videoIndex: ", videoIndex);

  return (
    <SwiperWrapper>
      <Swiper {...params} shouldSwiperUpdate={true}>
        {virtualArray.map((el, index) => (
          <div
            className="content-wrapper"
            key={index}
            style={{ backgroundColor: "white" }}
          >
            <Content
              index={index}
              playing={index === swipeActiveIndex}
              video={contentStatus[index].video}
              vote={contentStatus[index].vote}
            />
          </div>
        ))}
      </Swiper>
    </SwiperWrapper>
  );
};
export default LoopModeInfinityLoop;
