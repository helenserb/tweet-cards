import PropTypes from "prop-types";
import { Title, StartLink } from "./HomePage.styled";

export const HomePage = ({ location }) => {
  return (
    <>
      <Title>Welcome to Tweets!</Title>
      <StartLink to={location.state?.from ?? "/tweets"}>LET'S GO!!</StartLink>
    </>
  );
};

HomePage.propTypes = {
  location: PropTypes.object.isRequired,
};
