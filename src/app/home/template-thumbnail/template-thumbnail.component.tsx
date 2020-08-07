import React from 'react';
import Link from 'next/link';
import Tag from '../../../ui/tag/tag.component';
import {
  StyledLink,
  Template,
  TemplateHeader,
  TemplateImage,
  TemplateTitle,
  TemplateDescription,
  TagsContainer,
} from './template-thumbnail.styles';

interface TemplateThumbnailProps {
  title: string;
  description: string;
  icon: string;
  templateUrl: string;
  tags: string[];
}

export const TemplateThumbnail = ({
  title,
  description,
  icon,
  templateUrl,
  tags,
}: TemplateThumbnailProps) => {
  return (
    <Link href={templateUrl}>
      <StyledLink className="template-thumbnail">
        <Template
          whileHover={{
            scale: 1.03,
            transition: {
              duration: 0.4,
            },
          }}
          whileTap={{
            scale: 0.96,
          }}
        >
          <TemplateHeader>
            <TemplateImage src={`${process.env.ASSET_PREFIX}/icons/${icon}.svg`} />
            <TemplateTitle>{title}</TemplateTitle>
          </TemplateHeader>
          {tags.length && (
            <TagsContainer>
              {tags.map((tag, index) => (
                <Tag active key={`${title}-tag-${index}`}>
                  {tag}
                </Tag>
              ))}
            </TagsContainer>
          )}
          <TemplateDescription>{description}</TemplateDescription>
        </Template>
      </StyledLink>
    </Link>
  );
};
