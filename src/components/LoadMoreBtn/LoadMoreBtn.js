import PropTypes from 'prop-types';
import { Button } from './LoadMoreBtn.styled';

export const LoadMoreBtn = ({ nextPage }) => (
  <Button type="button" onClick={() => nextPage()}>
    Load More
  </Button>
);

LoadMoreBtn.propTypes = {
  nextPage: PropTypes.func.isRequired,
};
