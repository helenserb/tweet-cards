import PropTypes from "prop-types";
import { formatNumber } from "adds/formatNumber";
import logo from "../../img/logo.png";
import defaultAvatar from "../../img/hansel.png";
import {
  Background,
  BorderAvatar,
  Button,
  CardWrap,
  Inner,
  Statistics,
  AvatarBox,
  BackgroundAvatar,
  Logo,
  Wrap,
} from "./CardItem.styled";
import { useUsers } from "hooks";

export const CardItem = ({
  user: { id, avatar = defaultAvatar, user, tweets, followers, isFollowing },
  handleClickBtn,
}) => {
  const { isLoading } = useUsers();

  return (
    <CardWrap>
      <Logo src={logo} alt={user} />
      <Wrap>
        <Background />
      </Wrap>

      <AvatarBox>
        <BorderAvatar>
          <BackgroundAvatar style={{ backgroundImage: `url(${avatar}` }} />
        </BorderAvatar>
      </AvatarBox>

      <Inner>
        <Statistics> {tweets} tweets</Statistics>
        <Statistics>{formatNumber(followers)} Followers</Statistics>
        <Button
          disabled={isLoading}
          type="button"
          onClick={() => {
            handleClickBtn({ id, followers });
          }}
          isFollowing={isFollowing}
        >
          {isFollowing ? "Following" : "Follow"}
        </Button>
      </Inner>
    </CardWrap>
  );
};

CardItem.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    user: PropTypes.string.isRequired,
    tweets: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    isFollowing: PropTypes.bool.isRequired,
  }),
  handleClickBtn: PropTypes.func.isRequired,
};
