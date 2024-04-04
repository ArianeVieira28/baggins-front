import styled from 'styled-components';

export const ContentMyAds = styled.div`
  margin-bottom: 50px;
  margin-top: 25px;

  small.redText {
    color: #ff0000;
  }

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
  .deletebtn {
    width: 100%;
    margin: 10px 3px 0 3px;
    color: #8b0000;
    border-color: #8b0000;
    background-color: #fff;
    :hover {
      color: #fff;
      background-color: #8b0000;
    }
  }
  .disablebtn {
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
export const ContentTab = styled.div`
  a {
    color: #000;
  }
  .nav-link.active {
    color: #f2ac33;
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;

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

export const FooterButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin: 2px 0 0 0;

  height: 40%;
  width: 100%;

  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    width: 30%;
    height: 100%;

    padding: 0;
  }
`;

export const RowDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  width: 100%;
`;

export const Div50 = styled.div`
  width: 50%;

  padding: 0 20px;

  button {
    margin: 50px 0 0 0;
    width: 50%;
  }
`;

export const Div50Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 50%;

  padding: 0 20px;
`;

export const Div100 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  width: 100%;

  padding: 0 20px;

  div.column {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;
