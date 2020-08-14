import React from 'react';
import { TemplateThumbnail } from '../template-thumbnail/template-thumbnail.component';
import { StyledList, StyledListItem } from './thumbnail-list.styles';

export interface TemplateThumnbail {
  title: string;
  description: string;
  templateUrl: string;
  icon: string;
  tags: string[];
}

interface ThumbnailListProps {
  thumbnails: TemplateThumnbail[];
}

export const ThumbnailList = ({ thumbnails }: ThumbnailListProps) => {
  return (
    <StyledList>
      {thumbnails.map((thumbnail, index) => (
        <StyledListItem key={`template-thumbnail-${index}`}>
          <TemplateThumbnail {...thumbnail} />
        </StyledListItem>
      ))}
    </StyledList>
  );
};
