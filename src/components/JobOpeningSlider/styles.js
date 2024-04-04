import styled from 'styled-components';

export const SliderWrapper = styled.div`
  overflow: hidden;
  position: relative;

  display: flex;
  flex-direction: row;

  justify-content: space-between;
  align-items: center;

  height: 40vh;
`;

export const SliderBody = styled.div`
  display: flex;
  position: relative;
  height: 100%;
  width: 100%;
`;

export const SliderContainer = styled.div`
  display: flex;
  align-items: center;

  height: 100%;
  width: 100%;

  transition: transform 300ms ease 100ms;
  transform: ${props => `translateX(${props.slide}px)`};
`;

export const SliderButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #fff;
  z-index: 9999;

  height: 100%;

  button {
    pointer-events: ${props => (props.disabled ? 'none' : 'all')};

    background-color: #fff;
    /* border: 1px solid ${props => (props.disabled ? '#eee' : '#888')}; */
    border: 1px solid #eee;
    color: ${props => (props.disabled ? '#eee' : '#888')};

    border-radius: 50%;
    width: 40px;
    height: 40px;

    display: flex;
    justify-content: center;
    align-items: center;

    text-decoration: none;
    cursor: pointer;

    transition: all 0.3s;

    outline: none;

    &:hover {
      border: 1px solid #f2ac33;
      color: #f2ac33;
    }
  }
`;

export const ContentContainer = styled.div`
  position: relative;
  flex: 0 0 auto;
  width: 50%;
  height: 100%;
  padding: 5px;

  span {
    width: 100%;
    height: 100%;
    padding: 10px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    border: 2px solid #fff;
    border-radius: 8px;

    transition: all 0.3s;
    cursor: pointer;

    text-decoration: none;

    &:hover {
      border: 2px solid #3a397b;
    }
  }
`;

export const Content = styled.div`
  background-image: url(${props => props.banner});

  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  width: 100%;
  height: 100%;

  border-radius: 8px;
`;
