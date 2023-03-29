import React from 'react';
import { Audio } from 'react-loader-spinner';

const Loader: React.FC = (): JSX.Element => {

  return (
    <div className="center-block">
      <Audio
        height="80"
        width="80"
        color="green"
        ariaLabel="loading"
      />
    </div>
  );
};

export default Loader;
