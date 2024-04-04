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
  .form-label {
    display: block;
  }
  form {
    margin-left: 15px;
  }
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
    }
  }
`;

export const ContentsContainer = styled.div`
  position: relative;
  flex: 0 0 auto;
  width: 20%;
  height: 30vh;
  padding: 5px;

  a {
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

export const ContentsHeader = styled.div`
  background-image: url(${props => props.banner});

  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  width: 100%;
  height: 50%;

  border-radius: 10px;
`;

export const ContentsBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 5px 0;
  font-weight: 600;
  color: #000;

  width: 100%;
  height: 15%;
`;

export const ContentsFooter = styled.div`
  font-size: 12px;
  color: #999;

  width: 100%;
  height: 35%;
`;

export const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  padding: 0 40px;

  min-height: 364px;
  overflow-x: hidden;
`;

export const SearchOptions = styled.div`
  padding: 0 40px;

  form > div {
    padding: 0 5px;
    width: 100%;
  }

  form > div > div {
    width: 100%;
  }

  form > div > div > div {
    width: 100%;
  }

  form > div > div > div > input {
    width: 100%;
  }

  form {
    display: flex;
    flex-direction: row;

    margin: 0;
  }
`;
