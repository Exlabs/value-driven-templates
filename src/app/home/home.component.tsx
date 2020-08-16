import React from 'react';
import { Header } from './header/header.component';
import {
  ThumbnailList,
  TemplateThumnbail,
} from './thumbnail-list/thumbnail-list.component';
import { LatestHeader } from './home.styles';

interface HomeProps {
  thumbnails: TemplateThumnbail[];
}

export const Home = ({ thumbnails }: HomeProps) => {
  return (
    <>
      <Header />
      <LatestHeader id="resources">
        The <span>latest</span>
      </LatestHeader>
      <ThumbnailList thumbnails={thumbnails} />
    </>
  );
};
