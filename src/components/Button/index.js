import React from 'react';
import './Button.scss';

export default function Button({ name, type, sendPost }) {
  return (
    <button onClick={sendPost} className={`button ${type}`}>
      {' '}
      {name}{' '}
    </button>
  );
}
