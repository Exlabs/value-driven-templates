import React from 'react';
import { Header } from './header/header.component';
import { Description } from './description/description.component';
import { AppContainer } from '../../providers/layout.provider';

export const About = () => {
  return (
    <>
      <AppContainer>
        <Header />
      </AppContainer>
      <Description />
    </>
  );
};
