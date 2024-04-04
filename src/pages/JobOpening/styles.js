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
  padding: 0 20px 55px;
  position: relative;
  overflow-y: hidden;
`;

export const Header = styled.div`
  height: 15vh;
  width: 100%;
  padding: 0 55px;

  display: flex;
  flex-direction: row;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;

  height: 100%;
  width: 100%;
  font-size: 48px;
  text-align: start;
  font-weight: 600;
  color: #333;
`;

export const Description = styled.div`
  padding: 0 55px;
`;

export const HostAvatar = styled.div`
  height: 40px;
  width: 40px;

  background-image: url(${props => props.src});

  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: local;

  border-radius: 50%;
`;

export const HostInfo = styled.div`
  width: 30%;

  height: 100%;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  span {
    font-size: 12px;
    color: #777;
    padding: 0 10px;
  }
`;

export const IconDiv = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  padding: 0 55px;
  font-size: 22px;
  color: #f2ac33;

  span {
    padding: 0 10px;
    font-size: 18px;
    color: #333;
  }
`;

export const ContentBodyWrapper = styled.div`
  width: 100%;
`;

export const ContentBodyTitle = styled.div`
  padding: 30px 55px 0px;
  width: 100%;

  font-size: 20px;
  color: #f2ac33;
`;

export const Inscription = styled.div`
  padding: 30px 55px 0px;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;
export const CommentsWrapper = styled.div`
  padding: 0px 55px 0px;
`;

export const AverageRating = styled.div`
  padding: 20px 55px;

  color: #f2ac33;
  font-size: 3.5rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  span {
    padding: 0 20px;
  }

  button {
    width: 35%;
    font-weight: 600;
    font-size: 1.1rem;
  }
  button: disabled {
    background-color: #ccc;
  }
`;
