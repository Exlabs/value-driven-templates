import styled from 'styled-components';

export const StepContainer = styled.article`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.16);
  padding: 10px 30px;
`;

export const StepTitle = styled.h3`
  font-size: 33px;
  font-weight: 700;
  padding: 20px 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray300};

  @media screen and (max-width: ${({ theme }) => theme.deviceBreakpoint.mobile}) {
    font-size: 27px;
  }
`;

export const StepImage = styled.img`
  flex: 1;
`;

export const StepContent = styled.section`
  display: flex;
  align-items: center;
  padding: 20px 0;

  @media screen and (max-width: ${({ theme }) => theme.deviceBreakpoint.mobile}) {
    flex-direction: column;
  }
`;

export const StepDescription = styled.section`
  width: 60%;
  font-size: 19px;

  @media screen and (max-width: ${({ theme }) => theme.deviceBreakpoint.mobile}) {
    width: 100%;
    font-size: 16px;
  }
`;
