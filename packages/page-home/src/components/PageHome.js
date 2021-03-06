import React, {Fragment} from 'react';
import Logo from './Logo';
import { LoadingIcon, AwesomeButton } from 'components-bundle';

function App() {
  return (
    <Fragment>
      <div className="App">
        <header className="App-header">
          <Logo/>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>
            The next elements are components from the <code>components-bundle</code>: 
          </p>
          <div>
            A spinner: <LoadingIcon/> An awesome button: <AwesomeButton/>
          </div>
        </header>
      </div>
      <style>{`
      
        .App {
          text-align: center;
        }
        
        .App-logo {
          height: 40vmin;
          pointer-events: none;
        }
        
        @media (prefers-reduced-motion: no-preference) {
          .App-logo {
            animation: App-logo-spin infinite 20s linear;
          }
        }
      
        .App-header {
          background-color: #282c34;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-size: calc(10px + 2vmin);
          color: white;
        }
        
        .App-link {
          color: #61dafb;
        }
        
        @keyframes App-logo-spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
    
    
      `}</style>
    </Fragment>
  );
}

export default App;
