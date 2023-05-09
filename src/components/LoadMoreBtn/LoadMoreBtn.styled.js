import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${props => props.theme.spacing(3.5, 7)};
  gap: ${props => props.theme.spacing(1.5)};
  margin-left: auto;
  margin-right: auto;
  margin-top: ${props => props.theme.spacing(4)};
  margin-bottom: ${props => props.theme.spacing(8)};
  width: ${props => props.theme.spacing(49)};

  background-color: ${props => props.theme.colors.primary};
  box-shadow: ${props => props.theme.boxShadow};
  border-radius: ${props => props.theme.spacing(2.5)};

  font-family: ${props => props.theme.font.primary};
  font-weight: 600;
  font-size: ${props => props.theme.spacing(4.5)};
  line-height: 1.22;
  text-transform: uppercase;
  color: ${props => props.theme.colors.textLight};

  cursor: ${props => props.theme.cursor};

  &:hover,
  :focus {
    color: ${props => props.theme.colors.textDark};
    background-color: ${props => props.theme.colors.accent};
  }
`;
