import React from 'react';
import { ContributionTemplate } from '../app/contribution-template/contribution-template.component';
import { AppContainer } from '../providers/layout.provider';

const ContributionTemplatePage = () => {
  return (
    <AppContainer>
      <ContributionTemplate />
    </AppContainer>
  );
};

export default ContributionTemplatePage;
