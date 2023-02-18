import React from 'react';

function PageTitle({ children, ...rest }) {
  return (
    <p  {...rest}>
      {children}
    </p>
  );
}

export default PageTitle;
