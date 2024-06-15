import React from 'react';
import './Header.scss';
import { Profile, Input } from '../../components';
import Logo from '../../assets/logo.png';
import { SearchIcon } from '../../assets/icons';

export default function Header() {
  return (
    <div className="header">
      <div className="header-logo">
        <img src={Logo} />
      </div>
      <div className="header-actions">
        <div className="header-search-bar">
        <Input
          icon={SearchIcon}
          placeholder="Kaynakları, hizmetleri ve belgeleri arayın"
          width="40vw"
        />
      </div>
      <div className="header-profile">
        <Profile />
      </div>
      </div>
      
    </div>
  );
}
