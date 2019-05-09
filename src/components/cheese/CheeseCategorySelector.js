import React from "react";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";

import { categoryType } from "../../utilities/prop-types";

export const createCategoryOption = category => (
  // TODO: return a JSX option using the category id and name
  <option key={category.id} value={category.id}>{category.name}</option>
);

const CheeseCategorySelector = props => {
  const { categoryID, categories, firstOption, handleChange } = props;

  return (
    <Form.Control
      as="select"
      name="categoryID"
      value={categoryID}
      onChange={handleChange}
    >
      {/* TODO: implement the first option */}
      <option value="">{firstOption}</option>
      {/* TODO: transform the categories into options */}
      {categories.map(createCategoryOption)}
    </Form.Control>
  );
};

CheeseCategorySelector.propTypes = {
  // TODO: implement the prop types
  categories: PropTypes.arrayOf(categoryType).isRequired,
  categoryID: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  handleChange: PropTypes.func.isRequired,
  firstOption: PropTypes.string,
};

CheeseCategorySelector.defaultProps = {
  // makes the firstOption prop optional
  firstOption: "Select a Category",
};

export default CheeseCategorySelector;