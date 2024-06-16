import React from 'react';
import './Input.scss';
import PropTypes from 'prop-types';

export default function Input({
  placeholder,
  defaultValue,
  width,
  icon,
  label,
  formKey,
  onChangeForm,
}) {
  return (
    <div className="input-container">
      {icon ? (
        <div className="input-container-icon">
          <img alt="Icon" src={icon} />
        </div>
      ) : (
        ''
      )}
      {label ? <label>{label}</label> : ''}
      <input
        style={{ width: width, paddingLeft: icon ? '40px' : '12px' }}
        type="text"
        value={defaultValue}
        placeholder={placeholder}
        onChange={(e) => onChangeForm(formKey, e.target.value)}
      ></input>
    </div>
  );
}

Input.propTypes = {
  placeholder: PropTypes.string,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.string,
};
