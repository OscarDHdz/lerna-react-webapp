import React from 'react';

import AwesomeButton from '../src/AwesomeButton';
import LoadingIcon from '../src/LoadingIcon';

const Sampler = () => {
  return (
    <div style={{textAlign: 'center'}}>
      <LoadingIcon/>

      <br/>
      <AwesomeButton/>
  

      <style>{`
      
        body {
          background-color: black;
        }
      
      `}</style>
    </div>
  );
}

export default Sampler;