import styled from 'styled-components';

export const StyledTag = styled.span.attrs(
  ({ active }: { active?: boolean }) => active || false
)`
  background-color: ${({ theme, active }) =>
    active ? theme.color.primary400 : theme.color.gray400};
  color: ${({ theme, active }) => (active ? theme.color.primary : theme.color.gray)};
  border-radius: 8px;
  padding: 8px 18px;
  font-size: 16px;
  font-weight: 700;
  transition: background-color 0.3s ease;
`;

export const StyledCheckableTag = styled(StyledTag)`
  cursor: pointer;
`;
