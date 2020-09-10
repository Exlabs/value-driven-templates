import React from 'react';
import { AppContainer } from '../providers/layout.provider';
import { Template } from '../app/template/template.component';

const TemplatePage = () => {
  return (
    <AppContainer>
      <Template />
    </AppContainer>
  );
};

export default TemplatePage;
