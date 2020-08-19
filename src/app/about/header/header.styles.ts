import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-top: 130px;
`;

export const TextSection = styled.section`
  max-width: 50%;
  display: flex;
  flex-direction: column;

  & > a {
    margin-top: 20px;
    padding: 20px 40px;
    width: fit-content;
    display: inline-block;
    color: ${({ theme }) => theme.color.primary};
    font-size: 17px;
  }
`;

export const HeaderTitle = styled.h2`
  font-size: 80px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.fontPrimary};

  & > span {
    color: ${({ theme }) => theme.color.primary};
  }
`;

export const HeaderDescription = styled.p`
  max-width: 70%;
  font-size: 27px;
  padding-left: 5px;
  color: ${({ theme }) => theme.color.fontSecondary};

  & > span {
    color: ${({ theme }) => theme.color.secondary};
  }
`;

export const HeaderImage = styled.img`
  width: 60%;
  animation: floating 6s ease-in-out infinite;
`;
