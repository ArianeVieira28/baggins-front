import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  padding: 0 0 30px 0;
`;

export const ContentHeader = styled.div`
  padding: 0 50px 10px 50px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderLeft = styled.span`
  color: #000;
  font-size: 1.8rem;
  font-weight: 600;
  letter-spacing: 0.1rem;
`;

export const HeaderRight = styled.span`
  color: #888;
  font-size: 0.8rem;
  font-weight: 600;
`;
