import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Title = styled.h2`
  padding-top: ${props => props.theme.spacing(40)};
  margin-bottom: ${props => props.theme.spacing(20)};
  text-align: center;
  font-size: ${props => props.theme.spacing(36)};
  color: ${props => props.theme.colors.primary};
`;


export const StartLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${props => props.theme.spacing(3.5, 7)};
  margin-left: auto;
  margin-right: auto;
  margin-top: ${props => props.theme.spacing(6.5)};
  width: ${props => props.theme.spacing(49)};
  gap: ${props => props.theme.spacing(1.5)};

  background-color: ${props => props.theme.colors.primary};
  box-shadow: ${props => props.theme.boxShadow};
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
