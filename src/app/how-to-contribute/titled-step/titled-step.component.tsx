import React from 'react';
import { StepContainer, PulsePoint } from './titled-step.styles';

interface TitledStepProps {
  title: string;
}

export const TitledStep = ({ title }: TitledStepProps) => (
  <StepContainer className="titled-step">
    <PulsePoint />
    <span>{title}</span>
  </StepContainer>
);
