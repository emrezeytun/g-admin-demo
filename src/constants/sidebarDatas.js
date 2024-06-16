import {
  ApplicationManager,
  Datasources,
  Filestorage,
  Flowmachine,
  Microfunctions,
  Monitoring,
  Studio,
  Console,
} from '@icons';

const sidebarDatas = [
  {
    label: 'Tüm Hizmetler',
    menus: [
      { name: 'Portal', key: 'potal', icon: Console, isActive: true },
      { name: 'Studio', key: 'studio', icon: Studio, isActive: false },
      {
        name: 'Datasources',
        key: 'datasources',
        icon: Datasources,
        isActive: false,
      },
      {
        name: 'Flow Machine',
        key: 'flowmachine',
        icon: Flowmachine,
        isActive: false,
      },
      {
        name: 'Micro Functions',
        key: 'microfunctions',
        icon: Microfunctions,
        isActive: false,
      },
      { name: 'Gateway', key: 'gateway', icon: Console, isActive: false },
      {
        name: 'File Storage',
        key: 'filestorage',
        icon: Filestorage,
        isActive: false,
      },
    ],
  },
  {
    label: 'Kategoriler',
    menus: [
      {
        name: 'Application Manager',
        key: 'applicationmanager',
        icon: ApplicationManager,
        isActive: false,
      },
      {
        name: 'Monitoring',
        key: 'monitoring',
        icon: Monitoring,
        isActive: false,
      },
      { name: 'Console', key: 'console', icon: Console, isActive: false },
    ],
  },
];

export default sidebarDatas;
