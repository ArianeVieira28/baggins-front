import styled from 'styled-components';

export const Container = styled.div`
  flex-shrink: 0;
  position: relative;
  width: 260px;
  height: 100%;
`;

export const InnerContainer = styled.div`
  padding: 44px 0 32px 0;
  background-color: #fff;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  width: 100%;
  height: 90px;
  padding: 10px 20px;

  background-color: #f2ac33;

  div {
    min-height: 70px;
    max-height: 70px;
    height: 70px;

    min-width: 70px;
    max-width: 70px;
    width: 70px;

    border-radius: 50%;
    margin: 0 0 20px 0;

    background-image: url(${props => props.profilePic});

    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  p {
    width: 100%;
    padding: 10px;
    text-align: center;

    font-size: 1rem;
    background-color: #f2ac33;
    color: #fff;

    border-radius: 30px;
  }
`;

export const Body = styled.div`
  padding: 0 20px;
  height: 100%;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  padding: 0 20px;

  a {
    padding: 10px 20px;
    text-decoration: none;
    font-weight: 400;
    color: #e50000;
    border-radius: 4px;
    text-align: center;

    transition: 0.3s;

    margin: 0 0 5px 0;
  }

  a:hover {
    background: #eee;
  }
  button: disabled {
    background-color: #ccc;
    &:hover {
      background-color: #ccc !important;
      color: #666 !important;
      border-color: #666 !important;
    }
  }
`;

export const NavigationList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  padding: 20px 0 0 0;

  a {
    padding: 7px 20px;
    margin: 0 0 5px 0;
    text-decoration: none;
    font-weight: 400;
    color: #000;
    border-radius: 4px;

    transition: 0.3s;
  }

  a:hover {
    background: #eee;
  }
`;
