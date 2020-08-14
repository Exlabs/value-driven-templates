import React from 'react';
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
  return <Header />;
};
