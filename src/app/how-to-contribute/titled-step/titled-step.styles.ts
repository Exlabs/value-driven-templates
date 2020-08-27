import styled from 'styled-components';

export const StepContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &::before,
  &::after {
    content: '';
    flex: 1;
    height: 2px;
    background-color: ${({ theme }) => theme.color.fontPrimary100};
  }

  &::after {
    flex: 2;
  }

  & > span {
    margin-right: 10px;
    font-size: 20px;
    font-weight: 700;
  }
`;

export const PulsePoint = styled.div`
  width: 25px;
  height: 25px;
  background-color: ${({ theme }) => theme.color.secondary};
  margin: 0 10px;
  border-radius: 50%;
  animation: pulse 3s linear infinite;
`;
