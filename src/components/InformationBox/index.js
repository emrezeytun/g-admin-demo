import React from 'react';
import { Icon } from '../';
import { Information } from '../../assets/icons';
import './InformationBox.scss';

export default function InformationBox({
  type,
  icon,
  title,
  description,
  setIsInformationBoxOpen,
}) {
  return (
    <div className="information">
      <div className={`information-box ${type}`}>
        <div className="texts">
          <Icon icon={icon} />
          <span className="title">{title}</span>
          <span className="description">{description}</span>
        </div>
        <div className="actions">
          <span className="title">Learn more</span>
          <span
            className="description"
            onClick={() => setIsInformationBoxOpen(false)}
          >
            &times;
          </span>
        </div>
      </div>
    </div>
  );
}
