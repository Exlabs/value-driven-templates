import React from 'react';
import { StyledTag } from './tag.styles';
import { CheckableTag } from './checkable-tag.component';

interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  active?: boolean;
}

export interface TagType
  extends React.ForwardRefExoticComponent<TagProps & React.RefAttributes<HTMLElement>> {
  Checkable: typeof CheckableTag;
}

const InternalTag: React.ForwardRefRenderFunction<unknown, TagProps> = (
  { active = false, children, className, ...props }: TagProps,
  ref
) => {
  return (
    <StyledTag active={active} className={`tag ${className}`} ref={ref} {...props}>
      {children}
    </StyledTag>
  );
};

const Tag = React.forwardRef<unknown, TagProps>(InternalTag) as TagType;

Tag.displayName = 'Tag';

Tag.Checkable = CheckableTag;

export default Tag;
