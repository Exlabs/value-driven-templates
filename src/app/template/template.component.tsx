import React from 'react';
import { TemplateData } from '../../pages/templates/[id]';
import { AppContainer } from '../../providers/layout.provider';
import styled from 'styled-components';
import Tag from '../../ui/tag/tag.component';
import ReactMarkdown from 'react-markdown';

const TemplateContainer = styled.article``;

const TemplateHeader = styled.header`
  display: flex;
  align-items: center;

  @media screen and (max-width: ${({ theme }) => theme.deviceBreakpoint.mobile}) {
    flex-direction: column;
  }
`;

const TemplateIcon = styled.img`
  width: 25%;

  @media screen and (max-width: ${({ theme }) => theme.deviceBreakpoint.mobile}) {
    width: 100%;
  }
`;

const TextContainer = styled.section`
  flex: 1;
`;

const TemplateTitle = styled.h2`
  font-size: 49px;
  color: ${({ theme }) => theme.color.fontPrimary};
  font-weight: 700;

  & > span {
    background-color: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.white};
    padding: 0 10px;
  }

  @media screen and (max-width: ${({ theme }) => theme.deviceBreakpoint.mobile}) {
    font-size: 27px;
    text-align: center;
  }
`;

const TemplateDescription = styled.p`
  margin: 15px 0;
  font-size: 23px;
  max-width: 70%;
  color: ${({ theme }) => theme.color.fontSecondary};
  font-weight: 500;

  @media screen and (max-width: ${({ theme }) => theme.deviceBreakpoint.mobile}) {
    font-size: 18px;
    max-width: 100%;
    text-align: center;
  }
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  & > .tag {
    margin: 0.5%;
  }

  @media screen and (max-width: ${({ theme }) => theme.deviceBreakpoint.mobile}) {
    & .tag {
      margin: 1%;
      font-size: 14px;
    }
  }
`;

const TemplateContent = styled.section`
  margin-top: 40px;
  color: ${({ theme }) => theme.color.fontSecondary};
  font-size: 21px;
  line-height: 27px;

  & h1,
  & h2,
  & h3,
  & h4,
  & h5,
  & h6 {
    color: ${({ theme }) => theme.color.fontSecondary};
    font-weight: 700;
    margin: 20px 0;
  }

  & h1 {
    font-size: 35px;
  }

  & h2 {
    font-size: 31px;
  }

  & h3 {
    font-size: 27px;
  }

  & h4 {
    font-size: 23px;
  }

  & h5 {
    font-size: 21px;
  }

  & h6 {
    font-size: 19px;
  }

  &::first-letter {
    font-size: 60px;
    font-weight: 700;
    color: ${({ theme }) => theme.color.secondary};
    letter-spacing: -3px;
  }

  & > p {
    margin-bottom: 20px;
  }

  & > p:last-child {
    margin-bottom: 0;
  }

  @media screen and (max-width: ${({ theme }) => theme.deviceBreakpoint.mobile}) {
    font-size: 18px;

    &::first-letter {
      font-size: 40px;
      font-weight: 700;
      color: ${({ theme }) => theme.color.secondary};
      letter-spacing: -3px;
    }

    & h1 {
      font-size: 27px;
    }

    & h2 {
      font-size: 25px;
    }

    & h3 {
      font-size: 23px;
    }

    & h4 {
      font-size: 21px;
    }

    & h5 {
      font-size: 19px;
    }

    & h6 {
      font-size: 17px;
    }
  }
`;

interface TemplateProps {
  template: TemplateData;
}

export const Template = ({
  template: { icon, title, description, content, tags },
}: TemplateProps) => {
  const [firstTitleSection, lastTitleSection] = React.useMemo(() => {
    const wordsInTitle = title.split(' ');
    const lastElement = wordsInTitle.pop();

    return [wordsInTitle.join(' '), lastElement];
  }, [title]);

  return (
    <AppContainer>
      <TemplateContainer>
        <TemplateHeader>
          <TemplateIcon
            alt="Article icon"
            src={`${process.env.ASSET_PREFIX}/icons/templates/${icon}.svg`}
          />
          <TextContainer>
            <TemplateTitle>
              {firstTitleSection} <span>{lastTitleSection}</span>
            </TemplateTitle>
            <TemplateDescription>{description}</TemplateDescription>
            <TagsContainer>
              {tags.map((tag, index) => (
                <Tag active key={`template-tag-${index}`}>
                  {tag}
                </Tag>
              ))}
            </TagsContainer>
          </TextContainer>
        </TemplateHeader>
        <TemplateContent>
          <ReactMarkdown source={content} />
        </TemplateContent>
      </TemplateContainer>
    </AppContainer>
  );
};
