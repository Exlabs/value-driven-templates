import styled from 'styled-components';

export const Point = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.secondary};
  width: 40px;
  height: 40px;
  color: ${({ theme }) => theme.color.white};
  font-size: 31px;
  font-weight: 700;

  animation: pulse 3s linear infinite;
`;
