import React, { useState, useRef, useEffect } from 'react';

import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

import {
  SliderWrapper,
  SliderButton,
  SliderBody,
  SliderContainer,
  ContentContainer,
  Content,
} from './styles';

export default function Slider({ Contents = [] }) {
  const [slide, setSlide] = useState(0);
  const [contentWidth, setContentWidth] = useState(0);
  const [totalContentWidth, setTotalContentWidth] = useState(0);
  const [previousDisabled, setPreviousDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(false);
  const contentDom = useRef('null');
  const wrapperDom = useRef();

  useEffect(() => {
    setContentWidth(contentDom.current.clientWidth);
    const totalWidth = contentWidth * (Contents.length - 2) * -1;
    setTotalContentWidth(totalWidth);
  }, [contentWidth, Contents, contentDom.current.clientWidth]);

  useEffect(() => {
    setPreviousDisabled(slide === 0);
    setNextDisabled(slide === totalContentWidth || Contents.length < 2);
  }, [slide, totalContentWidth, Contents]);

  useEffect(() => {
    const resizeListener = () => {
      setContentWidth(contentDom.current.clientWidth);
      setSlide(0);
    };
    window.addEventListener('resize', resizeListener);

    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, []);

  function handlePrevious() {
    const previousHelper = slide + contentWidth > 0 ? 0 : slide + contentWidth;
    setSlide(previousHelper);
  }

  function handleNext() {
    const nextHelper =
      slide - contentWidth < totalContentWidth
        ? totalContentWidth
        : slide - contentWidth;
    setSlide(nextHelper);
  }

  return (
    <SliderWrapper ref={wrapperDom}>
      <SliderButton disabled={previousDisabled}>
        <button type="button" onClick={handlePrevious}>
          <FaAngleLeft />
        </button>
      </SliderButton>
      <SliderBody>
        <SliderContainer slide={slide}>
          {Contents.map(content => (
            <ContentContainer key={content.id} ref={contentDom}>
              <span>
                <Content banner={content.banner} />
              </span>
            </ContentContainer>
          ))}
        </SliderContainer>
      </SliderBody>
      <SliderButton disabled={nextDisabled}>
        <button type="button" onClick={handleNext}>
          <FaAngleRight />
        </button>
      </SliderButton>
    </SliderWrapper>
  );
}
