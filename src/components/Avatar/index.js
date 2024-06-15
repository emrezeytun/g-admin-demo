import React from 'react';
import './Avatar.scss';
import { getShortName } from '../../helper';

export default function Avatar({ name }) {
  return (
    <div className="avatar">
      <span>{getShortName(name)}</span>
    </div>
  );
}
