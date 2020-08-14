import React from 'react';
import { TemplateThumbnail } from '../template-thumbnail/template-thumbnail.component';
import { StyledList, StyledListItem, EmptyListInfo } from './thumbnail-list.styles';

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
      {!thumbnails.length ? (
        <EmptyListInfo>There is no templates yet</EmptyListInfo>
      ) : (
        thumbnails.map((thumbnail, index) => (
          <StyledListItem key={`template-thumbnail-${index}`}>
            <TemplateThumbnail {...thumbnail} />
          </StyledListItem>
        ))
      )}
    </StyledList>
  );
};
