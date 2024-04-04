import styled from 'styled-components';

export const Container = styled.div`
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
    margin-top: 5px;
  }
  .form-group {
    margin-top: 20px;
  }
  .form-group,
  .save {
    padding-left: 0;
  }
`;

export const CommentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
`;

export const CommentHeader = styled.div`
  width: 20%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  span {
    padding: 15px 0;
    font-weight: 600;
    color: #777;
  }
`;

export const UserPhoto = styled.div`
  height: 80px;
  width: 80px;

  background-image: url(${props => props.src});

  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: local;

  /* border: 1px solid #f2ac33; */

  border-radius: 50%;
`;

export const CommentBody = styled.div`
  width: 80%;

  display: flex;
  flex-direction: column;
`;

export const StarsRanking = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  color: #f2ac33;
  font-size: 2rem;
  padding: 0 20px 10px;
`;

export const CommentText = styled.div`
  padding: 0 20px 10px;
`;

export const CommentDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  padding: 0 20px;
`;

export const CommentDate = styled.div`
  font-weight: 600;
  padding: 0 10px 0 0;
`;

export const UserLocation = styled.div`
  padding: 0 10px;
  color: #777;
`;
