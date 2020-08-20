import React from 'react';
import {
  StepContainer,
  StepContent,
  StepDescription,
  StepImage,
  StepTitle,
} from './step.styles';

interface StepProps {
  title: string;
  imageUrl: string;
  children: React.ReactNode;
}
export const Step = ({ title, imageUrl, children }: StepProps) => {
  return (
    <StepContainer className="contribute-step">
      <StepTitle>{title}</StepTitle>
      <StepContent>
        <StepImage alt="Step content" src={imageUrl} />
        <StepDescription>{children}</StepDescription>
      </StepContent>
    </StepContainer>
  );
};
