import React from 'react';
import templates from '../content/templates.json';
import { Home } from '../app/home/home.component';
import { TemplateThumnbail } from '../app/home/thumbnail-list/thumbnail-list.component';
import { AppContainer } from '../providers/layout.provider';
import styled from 'styled-components';

const HomeContainer = styled.div`
  position: relative;
  overflow: hidden;
`;

const BackgroundImage = styled.img`
  position: absolute;
  left: -10%;
  top: -10%;
  opacity: 0.05;
  height: 60%;
`;

const HomePage = () => {
  const thumbnails = templates.map<TemplateThumnbail>((template) => ({
    ...template,
    templateUrl: template.id,
  }));

  return (
    <HomeContainer>
      <BackgroundImage
        alt="background"
        src={`${process.env.ASSET_PREFIX}/icons/bg.svg`}
      />
      <AppContainer>
        <Home thumbnails={thumbnails} />
      </AppContainer>
    </HomeContainer>
  );
};

export default HomePage;
