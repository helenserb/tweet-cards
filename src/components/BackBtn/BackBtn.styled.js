import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Button = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${props => props.theme.spacing(3.5, 7)};
  gap: ${props => props.theme.spacing(1.5)};
  margin-top: ${props => props.theme.spacing(6.5)};
  margin-bottom: ${props => props.theme.spacing(6.5)};
  width: ${props => props.theme.spacing(49)};

  background-color: ${props => props.theme.colors.primary};
  box-shadow: ${props => props.boxShadow};
  border-radius: ${props => props.theme.spacing(2.5)};

  font-weight: 600;
  font-size: ${props => props.theme.spacing(4.5)};
  line-height: 1.22;
  text-transform: uppercase;
  color: ${props => props.theme.colors.textLight};
  text-decoration: none;

  cursor: ${props => props.theme.cursor};

  &:hover,
  :focus {
    background-color: ${props => props.theme.colors.accent};
    color: ${props => props.theme.colors.textDark};
  }
`;
