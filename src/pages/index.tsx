import React from 'react';
import templates from '../content/templates.json';
import { Home } from '../app/home/home.component';
import { TemplateThumnbail } from '../app/home/thumbnail-list/thumbnail-list.component';
import { AppContainer } from '../providers/layout.provider';

const HomePage = () => {
  const thumbnails = templates.map<TemplateThumnbail>((template) => ({
    ...template,
    templateUrl: template.id,
  }));

  return (
    <AppContainer>
      <Home thumbnails={thumbnails} />
    </AppContainer>
  );
};

export default HomePage;
