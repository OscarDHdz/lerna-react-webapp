import React, {Fragment} from 'react';
import Nav from './nav';

const Layout = props => {
  return (
    <Fragment>
      <Nav/>
      {props.children}
    </Fragment>
  )
}

export default Layout;