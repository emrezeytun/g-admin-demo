import React from 'react';
import './Header.scss';
import { Profile, Input } from '@components';
import Logo from '@assets/logo.png';
import { SearchIcon } from '@icons';

export default function Header() {
  const onChangeForm = (val) => {
  };
  return (
    <div className="header">
      <div className="header-logo">
        <img alt="Logo" src={Logo} />
      </div>
      <div className="header-actions">
        <div className="header-search-bar">
          <Input
            onChangeForm={onChangeForm}
            icon={SearchIcon}
            placeholder="Kaynakları, hizmetleri ve belgeleri arayın"
            width="30vw"
          />
        </div>
        <div className="header-profile">
          <Profile />
        </div>
      </div>
    </div>
  );
}
