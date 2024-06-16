import React from 'react';
import './Breadcrumb.scss';
import { breadcrumbDatas } from '@constants';

const Breadcrumb = () => {
  const renderBreadcrumb = (data, isCurrent = false) => {
    return (
      <div className="breadcrumb">
        <span className={`breadcrumb-name ${isCurrent ? 'current' : ''}`}>
          {data.name}
        </span>
        {data.childDatas && (
          <>
            <span> / </span>
            {renderBreadcrumb(
              data.childDatas,
              data.childDatas.childDatas ? false : true
            )}
          </>
        )}
      </div>
    );
  };

  return (
    <div className="breadcrumb-main">{renderBreadcrumb(breadcrumbDatas)}</div>
  );
};

export default Breadcrumb;
