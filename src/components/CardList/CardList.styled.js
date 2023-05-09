import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${props => props.theme.spacing(12)};
  padding-bottom: ${props => props.theme.spacing(12)};
`;
