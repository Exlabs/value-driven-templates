import React from 'react';
import { StyledCheckableTag } from './tag.styles';

interface CheckableTagProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'onClick'> {
  active?: boolean;
  onClick: (isActive: boolean, event: React.MouseEventHandler<HTMLElement>) => void;
}

export const CheckableTag: React.FC<CheckableTagProps> = ({
  active = false,
  onClick,
  children,
}) => {
  const [isActive, setIsActive] = React.useState(active);

  const handleClick = (event: React.MouseEventHandler<HTMLElement>) => {
    const newValue = !isActive;

    setIsActive(newValue);
    onClick(newValue, event);
  };

  return (
    <StyledCheckableTag active={isActive} onClick={handleClick}>
      {children}
    </StyledCheckableTag>
  );
};
