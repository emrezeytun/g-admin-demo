import React from 'react';
import './Switch.scss';

export default function Switch({ isSwitchActive, setIsSwitchActive }) {
  return (
    <label className="switch">
      <input
        onClick={(e) => setIsSwitchActive(e.target.checked)}
        type="checkbox"
        checked={isSwitchActive}
      />
      <span className="slider round"></span>
    </label>
  );
}
