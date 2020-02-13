import React from 'react';

export const AwesomeButton = (props) => {

  const btnStyles = {
    backgroundColor: props.backgroundColor || 'orange',
    padding: props.padding || '0.5em 1em',
    border: 'none',
    color: 'white',
    fontSize: props.fontSize || '1em'
  }

  const value = props.value || 'Click Me!';

  const defaultClick = () => alert('You clicked the button');
  const onClickHandle = props.onClickHandle || defaultClick;


  return (
    <button style={btnStyles} onClick={onClickHandle} className={`${props.className} awesome-button`}>
      {value}
      <style>{`
        button.awesome-button:hover {
          cursor: pointer;
        }
      `}</style>
    </button>
  )
};

export default AwesomeButton;