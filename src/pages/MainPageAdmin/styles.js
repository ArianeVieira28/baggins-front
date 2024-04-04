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
  margin-bottom: 50px;
  margin-top: 25px;
  display: flex;
  .btn {
    width: 100%;
    margin: 10px 3px 0 3px;
    color: #3a397b;
    border-color: #3a397b;
    background-color: #fff;
    :hover {
      color: #fff;
      background-color: #3a397b;
    }
  }
  .form-label {
    font-weight: bold;
  }
  .card {
    border-color: #3a397b;
    border: 2px solid #fff;
    border-radius: 8px;

    transition: all 0.3s;
    cursor: pointer;

    text-decoration: none;
    padding: 5px;
    img {
      border-radius: 10px;
    }
    .roundedimg {
      height: 100px;
      width: 100px;
      border-radius: 50%;
      margin: 0 auto;
    }
    &:hover {
      border: 2px solid #3a397b;
    }
  }
  .card-title {
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 300px;
  }
  .card-text {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 400px;
  }
  .form-group {
    margin-top: 20px;
  }
  .form-group,
  .save {
    padding-left: 0;
  }
  .svg-inline--fa {
    color: #6c757d;
    margin-right: 10px;
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
export const Btn = styled.div`
  button: disabled {
    background-color: #ccc;
  }
  button[disabled]:hover {
    background: #ccc;
    color: #3a397b !important;
  }
`;
