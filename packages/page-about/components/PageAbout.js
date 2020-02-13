import React, {Fragment} from 'react';
import Cards from './Cards';
import Header from './Header';

const PageAbout = () => {
  return (
    <Fragment>|
      <div className="page-about container">
        
        <Header/>
        
        <p>Also... here you can see some bootstrap cards:</p>
        <Cards/>


      </div>
    </Fragment>
  )
}

export default PageAbout;