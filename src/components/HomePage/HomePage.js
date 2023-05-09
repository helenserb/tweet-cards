import PropTypes from "prop-types";
import { Title, StartLink } from "./HomePage.styled";

export const HomePage = ({ location }) => {
  return (
    <>
      <Title>Welcome to Tweets!</Title>
      <StartLink to={location.state?.from ?? "/tweets"}>Let's start!</StartLink>
    </>
  );
};

HomePage.propTypes = {
  location: PropTypes.object.isRequired,
};
