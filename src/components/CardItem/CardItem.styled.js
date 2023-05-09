import styled from 'styled-components';
import bgImg from '../../img/background.png';

export const CardWrap = styled.li`
  position: relative;
  width: ${props => props.theme.spacing(95)};
  height: ${props => props.theme.spacing(115)};

  text-align: center;

  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: ${props => props.theme.spacing(5)};
`;

export const Wrap = styled.div`
  padding: ${props => props.theme.spacing(7, 9, 0, 9)};
  margin-bottom: ${props => props.theme.spacing(22)};
`;

export const Background = styled.div`
  width: ${props => props.theme.spacing(77)};
  height: ${props => props.theme.spacing(42)};
  background-image: url(${bgImg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export const Logo = styled.img`
  position: absolute;
  left: ${props => props.theme.spacing(5)};
  top: ${props => props.theme.spacing(5)};

  width: ${props => props.theme.spacing(19)};
  height: ${props => props.theme.spacing(5.5)};
`;

export const AvatarBox = styled.div`
  position: absolute;
  width: 100%;
  top: ${props => props.theme.spacing(53.5)};

  ::before {
    content: '';
    display: block;
    width: 100%;
    height: ${props => props.theme.spacing(2)};
    background-color: ${props => props.theme.colors.secondary};

    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
  }
`;

export const BorderAvatar = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${props => props.theme.spacing(20)};
  height: ${props => props.theme.spacing(20)};

  border-radius: 50%;
  background-color: ${props => props.theme.colors.secondary};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;
export const BackgroundAvatar = styled.div`
  margin-right: auto;
  margin-left: auto;
  width: ${props => props.theme.spacing(15.5)};
  height: ${props => props.theme.spacing(15.5)};

  border-radius: 50%;
  background-color: ${props => props.theme.colors.primary};
  background-image: url(https://i.pravatar.cc/150?img=7);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Statistics = styled.p`
  margin-bottom: ${props => props.theme.spacing(4)};

  font-weight: 500;
  font-size: ${props => props.theme.spacing(5)};
  line-height: 1.33;
  text-transform: uppercase;

  color: ${props => props.theme.colors.secondary};

  :nth-last-child(-n + 2) {
    margin-bottom: 0;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${props => props.theme.spacing(3.5, 7)};
  gap: ${props => props.theme.spacing(1.5)};
  margin-top: ${props => props.theme.spacing(6.5)};
  width: ${props => props.theme.spacing(49)};

  background-color: ${props =>
    props.isFollowing
      ? props.theme.colors.accent
      : props.theme.colors.secondary};
  box-shadow: ${props => props.theme.boxShadow};
  border-radius: ${props => props.theme.spacing(2.5)};

  font-family: ${props => props.theme.font.primary};
  font-weight: 600;
  font-size: ${props => props.theme.spacing(4.5)};
  line-height: 1.22;
  text-transform: uppercase;
  color: ${props => props.theme.colors.textDark};

  cursor: ${props => props.theme.cursor};

  &:hover,
  :focus {
    background-color: ${props =>
      props.isFollowing
        ? props.theme.colors.secondary
        : props.theme.colors.accent};
  }
`;
