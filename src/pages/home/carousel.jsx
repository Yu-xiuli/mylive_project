import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useMemoizedFn } from "ahooks";

// 走马灯容器
const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin: 0 auto;
`;

// 走马灯滑块
const CarouselSlider = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

// 单个幻灯片
const CarouselSlide = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 55%;
  height: 100%;
  background-size: cover;
  background-position: center;
  opacity: ${(props) => (props.active ? 1 : 0)};
  transition: opacity 1s ease-in-out;
  cursor: pointer;
`;

const CarouselSlideInfo = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 45%;
  height: 100%;
  padding-left: 20px;
  border: 1px solid red;
  opacity: ${(props) => (props.active ? 1 : 0)};
  transition: opacity 1s ease-in-out;
  display: flex;
  align-items: center;
  line-height: 24px;
  font-size: 20px;
`;

// 指示器容器
// const DotsContainer = styled.div`
//   position: absolute;
//   bottom: 20px;
//   left: 50%;
//   transform: translateX(-50%);
//   display: flex;
//   gap: 8px;
// `;

// 单个指示器点
// const Dot = styled.button`
//   width: 12px;
//   height: 12px;
//   border-radius: 50%;
//   background-color: ${(props) =>
//     props.active ? "white" : "rgba(255, 255, 255, 0.5)"};
//   border: none;
//   cursor: pointer;
//   transition: background-color 0.3s;
// `;

const Carousel = ({
  images,
  autoPlay = true,
  interval = 600,
  // showDots = false,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef(null);

  const startAutoPlay = useMemoizedFn(() => {
    stopAutoPlay();
    timerRef.current = setInterval(() => {
      goToNext();
    }, interval);
  });

  const stopAutoPlay = useMemoizedFn(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  });

  // 自动轮播
  useEffect(() => {
    if (autoPlay) {
      startAutoPlay();
      return () => stopAutoPlay();
    }
  }, [autoPlay, interval, startAutoPlay, stopAutoPlay]);

  const goToNext = useMemoizedFn(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  });

  //   const goToPrev = useMemoizedFn(() => {
  //     setCurrentIndex((prevIndex) =>
  //       prevIndex === 0 ? images.length - 1 : prevIndex - 1
  //     );
  //   });

  // const goToSlide = useMemoizedFn((index) => {
  //   setCurrentIndex(index);
  //   if (autoPlay) {
  //     startAutoPlay(); // 重置自动播放计时器
  //   }
  // });

  // 处理鼠标悬停暂停
  const handleMouseEnter = useMemoizedFn(() => {
    if (autoPlay) {
      stopAutoPlay();
    }
  });

  const handleMouseLeave = useMemoizedFn(() => {
    if (autoPlay) {
      startAutoPlay();
    }
  });

  return (
    <CarouselContainer
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <CarouselSlider>
        {images.map((imageInfo, index) => (
          <>
            <CarouselSlide
              key={index}
              active={index === currentIndex}
              style={{
                backgroundImage: `url(${require("@/imgs/travel/travel_" + imageInfo.imgIdx + ".jpg")})`,
              }}
              // style={{ backgroundImage: `url(${require('@/imgs/travel/travel_1.jpg')})` }}
              // @/imgs/travel/travel_1.jpg
            />
            <CarouselSlideInfo active={index === currentIndex}>
              {imageInfo.info}
            </CarouselSlideInfo>
          </>
        ))}
      </CarouselSlider>

      {/* 左右切换按钮 */}
      {/* <CarouselButton prev onClick={goToPrev}>{'>'}</CarouselButton>
      <CarouselButton onClick={goToNext}>{'>'}
      </CarouselButton> */}

      {/* 指示器点 */}
      {/* {showDots && (
        <DotsContainer>
          {images.map((_, index) => (
            <Dot
              key={index}
              active={index === currentIndex}
              onClick={() => goToSlide(index)}
            />
          ))}
        </DotsContainer>
      )} */}
    </CarouselContainer>
  );
};

export default Carousel;
