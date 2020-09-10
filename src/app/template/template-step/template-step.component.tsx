import React from 'react';
import {
  StyledContainer,
  Description,
  DescriptionContainer,
  StepIcon,
  StepTitle,
} from './template-step.styles';

interface TemplateStepProps {
  icon: string;
  title: string;
  description: string;
}

export const TemplateStep = ({ icon, title, description }: TemplateStepProps) => {
  const [showDescription, setShowDescription] = React.useState(false);

  const handleMouseEnter = () => {
    setShowDescription(true);
  };

  const handleMouseLeave = () => {
    setShowDescription(false);
  };

  const handleClick = () => {
    setShowDescription(!showDescription);
  };

  return (
    <StyledContainer
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      className="template-step"
    >
      <StepIcon
        alt="Template step"
        src={`${process.env.ASSET_PREFIX}/icons/template/${icon}.svg`}
      />
      <StepTitle>{title}</StepTitle>
      {showDescription && (
        <DescriptionContainer
          initial={{
            height: 0,
            opacity: 0,
          }}
          animate={{
            height: 'fit-content',
            minHeight: '100%',
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
            easings: true,
          }}
        >
          <StepTitle>{title}</StepTitle>
          <Description>{description}</Description>
        </DescriptionContainer>
      )}
    </StyledContainer>
  );
};
