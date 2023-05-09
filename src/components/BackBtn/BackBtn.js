import PropTypes from 'prop-types';
import { Button } from 'components/BackBtn';

export const BackBtn = ({ location }) => (
  <Button to="/" state={{ from: location }}>
    Back
  </Button>
);

BackBtn.propTypes = {
  location: PropTypes.object.isRequired,
};
