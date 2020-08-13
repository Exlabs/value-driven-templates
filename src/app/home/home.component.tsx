import React from 'react';
import { Navigation } from '../../ui/navigation/navigation.component';
import { Header } from './header/header.component';

interface TemplateThumnbail {
  title: string;
  description: string;
  url: string;
  imageUrl: string;
}

interface HomeProps {
  thumbnails: TemplateThumnbail[];
}

export const Home = () => {
  return (
    <>
      <Navigation />
      <Header />
    </>
  );
};
