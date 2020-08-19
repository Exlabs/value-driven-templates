import React from 'react';
import templates from '../content/templates.json';
import { Home } from '../app/home/home.component';
import { TemplateThumnbail } from '../app/home/thumbnail-list/thumbnail-list.component';

const HomePage = () => {
  const thumbnails = templates.map<TemplateThumnbail>((template) => ({
    ...template,
    templateUrl: template.id,
  }));

  return <Home thumbnails={thumbnails} />;
};

export default HomePage;
