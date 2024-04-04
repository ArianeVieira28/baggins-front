import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const InnerContainer = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  z-index: 0;
  overflow: hidden;
`;

export const ContentWrapper = styled.div`
  overflow-y: scroll;
  scrollbar-color: rgba(14, 19, 24, 0.15) transparent;
  height: 100%;
  width: 100%;
  position: relative;
  overflow-x: hidden;
  scrollbar-width: thin;

  &::-webkit-scrollbar {
    width: 0.4em;
  }

  &::-webkit-scrollbar-track {
    /* box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3); */
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(14, 19, 24, 0.15);
    /* outline: 1px solid slategrey; */
  }
`;

export const CotentHeader = styled.div`
  width: 100%;
  padding: 20px;
  position: relative;
`;

export const CotentBody = styled.div`
  width: 100%;
  padding: 20px;
  position: relative;
  overflow-y: hidden;
`;

export const Header = styled.div`
  height: 35vh;
  width: 100%;

  background-image: url(${props => props.background});

  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: local;

  border-radius: 8px;

  div {
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);

    border-radius: 8px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h5 {
      color: #fff;
      font-size: 1.5rem;
      font-style: italic;
      font-family: "Palatino Linotype"
      font-weight: 350;
    }

    p{
      color: #fff;
      font-size: 1rem;
      font-style: italic;
      font-family: "Palatino Linotype"
      font-weight: 350;
    }

    input[type='text'] {
      border-radius: 8px;
      border: none;
      padding: 10px 20px;
      width: 50%;
    }
  }
`;

export const HeaderProfileAvatar = styled.div`
  height: 250px;
  width: 250px;

  background-image: url(${props => props.src});

  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: local;

  border-radius: 50%;

  margin: -125px auto 0;
`;

export const ContainerProfile = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  hr {
    margin: 0 50px 0 50px;
  }
`;
