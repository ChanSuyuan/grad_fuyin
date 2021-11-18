import React from 'react';
import classNames from 'classnames';
import './index.less';

const GlobalFooter = ({ className, copyright }: any) => {
  const clsString = classNames("globalFooter", className);
  return (
    <footer className={clsString}>
      {copyright && <div className="copyright">{copyright}</div>}
    </footer>
  );
};

export default GlobalFooter;
