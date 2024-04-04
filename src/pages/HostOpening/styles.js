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

    h1 {
      color: #fff;
      font-size: 4rem;
      font-weight: 700;
      margin: 0 0 20px 0;
    }

    input[type='text'] {
      border-radius: 8px;
      border: none;
      padding: 10px 20px;
      width: 50%;
    }
  }
`;

export const Title = styled.div`
  align-items: center;
  text-align: center;
  height: 100%;
  width: 100%;
  font-size: 48px;
  font-weight: 600;
  color: #333;
`;

export const Description = styled.div`
  padding: 0 55px;
  i {
    margin-right: 3px;
  }
  .MuiRating-root {
    display: flex;

    margin-bottom: 15px;
    // width: 50%;
    // margin: 0 auto;
  }
  .MuiRating-icon MuiRating-iconFilled {
    color: #f2ac33;
  }
  .MuiRating-icon MuiRating-iconEmpty {
    font-size: 22px !important;
  }
  .MuiRating-label {
    font-size: 22px !important;
  }
  .col {
    padding-top: 15px;
    margin: 5px;
  }
`;

export const HostAvatar = styled.div`
  height: 100px;
  width: 100px;

  background-image: url(${props => props.src});

  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: local;

  border-radius: 50%;
`;

export const HostInfo = styled.div`
  height: 100%;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  margin-right: 50px;
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
