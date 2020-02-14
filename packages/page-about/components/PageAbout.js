import React, {Fragment} from 'react';
import Cards from './Cards';
import Header from './Header';
import {AwesomeButton, LoadingIcon} from 'components-bundle';

const PageAbout = () => {
  return (
    <Fragment>|
      <div className="page-about container">
        
        <Header/>
        
        <p>Also... here you can see some bootstrap cards:</p>
        <Cards/>

        <br/>

        <div style={{backgroundColor: 'black', color: 'white', padding: '7px', borderRadius: '8px'}}>
          <p>
            And yup, I also have some elements of the <code>components-bundle</code>: <br/>
            A spinner: <LoadingIcon/> An awesome button: <AwesomeButton/>
          </p>
        </div>


      </div>
    </Fragment>
  )
}

export default PageAbout;