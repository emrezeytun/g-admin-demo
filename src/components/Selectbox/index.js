import React from 'react';
import './Selectbox.scss';
import PropTypes from 'prop-types';

export default function Selectbox({
  placeholder,
  label,
  width,
  formKey,
  onChangeForm,
  selectboxData,
}) {
  return (
    <div className="selectbox-container">
      {label ? <label>{label}</label> : ''}
      <select
        onChange={(e) => onChangeForm(formKey, e.target.value)}
        style={{ width: width }}
        placeholder={placeholder}
      >
        {selectboxData.length
          ? selectboxData.map((i) => {
              return (
                <option key={i.id} value={i.id}>
                  {i.name}
                </option>
              );
            })
          : ''}
      </select>
    </div>
  );
}

Selectbox.propTypes = {
  placeholder: PropTypes.string,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.string,
};
