/* eslint-disable react/prop-types */
import React, { useState, useRef, useEffect } from 'react';

import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import testImage1 from '../../assets/imgs/testimages/test1.jpg';

import {
  SliderWrapper,
  SliderButton,
  SliderBody,
  SliderContainer,
  ContentHeader,
  ContentBody,
  ContentFooter,
  ContentContainer,
  Loading,
  Score,
} from './styles';

export default function Slider(props) {
  const { loading, errorMessage } = props;
  // eslint-disable-next-line no-unused-vars
  const [contents, setContents] = useState([]);
  const [slide, setSlide] = useState(0);
  const [contentWidth, setContentWidth] = useState(0);
  const [totalContentWidth, setTotalContentWidth] = useState(0);
  const [previousDisabled, setPreviousDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(false);
  const contentDom = useRef('null');
  const wrapperDom = useRef();

  useEffect(() => {
    if (props.contents) {
      setContents(props.contents);
    } else {
      setContents([]);
    }
  }, [props.contents]);

  useEffect(() => {
    setContentWidth(contentDom.current.clientWidth);
    const totalWidth = contentWidth * (contents.length - 5) * -1;
    setTotalContentWidth(totalWidth);
  }, [contentWidth, contents, contentDom.current.clientWidth]);

  useEffect(() => {
    setPreviousDisabled(slide === 0);
    setNextDisabled(slide === totalContentWidth || contents.length < 5);
  }, [slide, totalContentWidth, contents]);

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

  function handleScore(score) {
    const temp = score * 100;
    return Number(temp.toFixed());
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
          {!loading &&
            contents.length > 0 &&
            contents.map(content => (
              <ContentContainer
                key={`${content.id}+${content.titulo}`}
                ref={contentDom}
              >
                <Link to={`/jobopening/${content.id}`}>
                  <ContentHeader banner={testImage1} />
                  <ContentBody>
                    {content.titulo && content.titulo.length > 20 ? (
                      <span>{content.titulo.substring(0, 20)}...</span>
                    ) : (
                      <span>{content.titulo}</span>
                    )}
                  </ContentBody>
                  <ContentFooter>
                    {content.descricao && content.descricao.length > 120 ? (
                      <span>{content.descricao.substring(0, 120)}...</span>
                    ) : (
                      <span>{content.descricao}</span>
                    )}
                    {content.score && (
                      <Score>
                        <span>{handleScore(content.score)}% Relevante</span>
                        <span>
                          {`${content.userSkills} de ${content.optSkills} habilidades`}
                        </span>
                      </Score>
                    )}
                  </ContentFooter>
                </Link>
              </ContentContainer>
            ))}
          {loading && <Loading> Carregando... </Loading>}
          {!loading && contents.length === 0 && (
            <Loading> {errorMessage} </Loading>
          )}
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
