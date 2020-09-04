import styled from 'styled-components';

export const DescriptionContainer = styled.article`
  margin-top: 50px;
  margin: 0 auto;

  @media screen and (max-width: ${({ theme }) => theme.deviceBreakpoint.mobile}) {
    max-width: 100%;
  }
`;

export const DescriptionTitle = styled.h2`
  text-align: center;
  font-size: 35px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.fontPrimary};

  & > span {
    color: ${({ theme }) => theme.color.secondary};
  }

  @media screen and (max-width: ${({ theme }) => theme.deviceBreakpoint.mobile}) {
    font-size: 25px;
  }
`;

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 80px;

  @media screen and (max-width: ${({ theme }) => theme.deviceBreakpoint.mobile}) {
    flex-direction: column-reverse;
  }
`;

export const SectionTitle = styled.h3`
  font-size: 33px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.fontPrimary};

  @media screen and (max-width: ${({ theme }) => theme.deviceBreakpoint.mobile}) {
    font-size: 21px;
  }
`;

export const SectionText = styled.p`
  font-size: 21px;

  @media screen and (max-width: ${({ theme }) => theme.deviceBreakpoint.mobile}) {
    font-size: 17px;
  }
`;

export const SectionTextContainer = styled.div`
  width: 55%;

  @media screen and (max-width: ${({ theme }) => theme.deviceBreakpoint.mobile}) {
    width: 100%;
    margin: 20px 0;
  }
`;

export const SectionImageContainer = styled.div.attrs(
  ({ backgroundImage }: { backgroundImage: string }) => ({ backgroundImage })
)`
  width: 40%;
  position: relative;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: '';
    z-index: 0;
    background: ${({ backgroundImage }) =>
      `url('${process.env.ASSET_PREFIX}/icons/hero-pattern/${backgroundImage}.svg')`};
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.1;
  }

  @media screen and (max-width: ${({ theme }) => theme.deviceBreakpoint.mobile}) {
    width: 100%;
  }
`;

export const SectionImage = styled.img`
  width: 80%;
  z-index: 1;

  @media screen and (max-width: ${({ theme }) => theme.deviceBreakpoint.mobile}) {
    width: 100%;
  }
`;
