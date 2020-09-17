import React from 'react';

import { TemplateStep } from '../template-step/template-step.component';
import { StyledContainer } from './steps-container.styles';

export const StepsContainer = () => {
  return (
    <StyledContainer>
      <TemplateStep
        description="Write a few words that describe the selected tool."
        title="1. Short introduction"
        icon="extension"
      />
      <TemplateStep
        description="Who will benefit the most from this tool is it developer, architect, project manager?"
        title="2. Target"
        icon="profile"
      />
      <TemplateStep
        description=" Theoretical way of using selected tool."
        title="3. How to use it"
        icon="info"
      />
      <TemplateStep
        description=" Write a case study of usage selected tool."
        title="4. Practical example"
        icon="calculator"
      />
      <TemplateStep
        description="For example software which helps with using tool, e.g. software for making C4."
        title="5. Available tools (optional)"
        icon="toolbox"
      />
      <TemplateStep
        description="Summarize the most important things from the selected tool in the shortest way."
        title="6. Takeaway"
        icon="trophy"
      />
      <TemplateStep
        description="If you’ve used any external sources, link them here."
        title="7. Sources"
        icon="link"
      />
    </StyledContainer>
  );
};
