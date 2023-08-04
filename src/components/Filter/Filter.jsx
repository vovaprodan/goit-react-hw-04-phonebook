import React from "react";
import PropTypes from 'prop-types';

export const Filter = ({ value, onChange}) => {
    return <div>
        <label>
    Find contacts by name
  <br />  <input type="text" name="text" value={value} onChange={onChange} required />
  </label>
</div>
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func
}