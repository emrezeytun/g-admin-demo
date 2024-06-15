import React from 'react';
import './Textarea.scss';
import PropTypes from 'prop-types';

export default function Textarea({
  placeholder,
  defaultValue,
  width,
  label,
  formKey,
  onChangeForm,
}) {
  return (
    <div className="textarea-container">
      {label ? <label>{label}</label> : ''}
      <textarea
        style={{ width: width }}
        value={defaultValue}
        placeholder={placeholder}
        onChange={(e) => onChangeForm(formKey, e.target.value)}
      ></textarea>
    </div>
  );
}

Textarea.propTypes = {
  placeholder: PropTypes.string,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.string,
};
