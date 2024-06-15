import React, { useState } from 'react';
import './Sidebar.scss';
import { sidebarDatas } from '../../constants';
import { Icon } from '../../components';

export default function Sidebar() {
  const [sidebar, setSidebar] = useState(sidebarDatas);

  const activeMenuChange = (key) => {
    setSidebar(
      sidebar.map((group) => ({
        ...group,
        menus: group.menus.map((menu) => ({
          ...menu,
          isActive: menu.key === key,
        })),
      }))
    );
  };

  return (
    <div className="sidebar">
      <div className="sidebar-categories">
        {sidebar.map((item) => {
          return (
            <div key={item.label}>
              <span>{item.label}</span>
              <ul>
                {item.menus.map((menu) => {
                  return (
                    <li
                      key={menu.key}
                      onClick={() => activeMenuChange(menu.key)}
                      className={`${menu.isActive ? 'active' : ''}`}
                    >
                      <Icon icon={menu.icon} /> {menu.name}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
