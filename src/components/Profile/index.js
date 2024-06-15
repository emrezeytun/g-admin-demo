import React from 'react';
import './Profile.scss';
import { Icon, Avatar } from '../';
import {
  Folder,
  Notification,
  Settings,
  Information,
} from '../../assets/icons';

export default function Profile() {
  const headerRightBarIcons = [
    { icon: Folder },
    { icon: Notification },
    { icon: Settings },
    { icon: Information },
  ];
  const personalInformation = {
    name: 'EMRE ZEYTUN',
    mail: 'support@emrezeytun.com.tr',
  };
  return (
    <div className="profile">
      <div className="profile-icons">
        {headerRightBarIcons.map((i) => {
          return (
            <div key={i.icon} className="profile-icons-item">
              <Icon icon={i.icon} />
            </div>
          );
        })}
      </div>

      <div className="profile-personal">
        <div className="profile-personal-information">
          <span className="name">{personalInformation.name}</span>
          <span className="mail">{personalInformation.mail}</span>
        </div>
        <div className="profile-personal-avatar">
          <Avatar name={personalInformation.name} />
        </div>
      </div>
    </div>
  );
}
