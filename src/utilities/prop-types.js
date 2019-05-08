import PropTypes from 'prop-types';

// could also be written in one step as
export const categoryType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
});