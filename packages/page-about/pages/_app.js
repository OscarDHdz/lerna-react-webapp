import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = ({Component, initialProps}) => {
  return (
    <Component {...initialProps}/>
  )
}

export default App;