import styled from 'styled-components';

export const ContentAccount = styled.div`
  margin-bottom: 50px;
  .buttons {
    text-align: 'center';
    display: flex;
  }
  .btn {
    width: 100%;
    margin: 10px 3px 10px 3px;
    color: #3a397b;
    border-color: #3a397b;
    :hover {
      color: #fff;
      background-color: #3a397b;
      .svg-inline--fa fa-trash fa-w-14 {
        color: #fff;
      }
    }
  }
  label {
    font-size: 15px;
    margin-top: 5px;
  }
  .form-group {
    margin-top: 20px;
  }
  .form-group,
  .save {
    padding-left: 0;
  }
  .MuiRating-root {
    display: block;

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
    margin-top: 10px;
  }

  .svg-inline--fa {
    color: #3a397b;
    margin-right: 10px;
  }
  .form-control {
    margin-top: 10px;
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
