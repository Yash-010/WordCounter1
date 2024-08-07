import React, { useState } from 'react';

export default function TextArea(props) {
  const click = () => {
    // console.log('Button clicked' + text);
    let newtext = text.toUpperCase();
    settext(newtext);
    props.showAlert('Converted To Uppercase', 'success');
  };

  const click1 = () => {
    // console.log('Button clicked' + text);
    let newtext = text.toLowerCase();
    settext(newtext);
    props.showAlert('Converted To Lowercase', 'success');
  };

  const change = (event) => {
    // console.log('changed');
    settext(event.target.value);
  };
  const [text, settext] = useState('');

  const copy = () => {
    var text = document.getElementById('exampleFormControlTextarea1');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert('Text Copied', 'success');
  };

  const extraspace = () => {
    let newtext = text.split(/[ ]+/);
    settext(newtext.join(' '));
    props.showAlert('Extra Spaces Are Removed ', 'success');
  };

  return (
    <>
      <div
        className='container'
        style={{
          color: props.mode === 'dark' ? 'white' : 'black',
        }}
      >
        <h1>{props.heading}</h1>
        <div className='mb-3'>
          <textarea
            style={{
              backgroundColor: props.mode === 'dark' ? 'grey' : 'white',
              color: props.mode === 'dark' ? 'white' : 'black',
            }}
            value={text}
            className='form-control'
            id='exampleFormControlTextarea1'
            rows='10'
            onChange={change}
          ></textarea>
        </div>
        <button className='btn btn-primary my-1' onClick={click}>
          Convert to uppercase
        </button>

        <button className='btn btn-primary mx-3 my-1' onClick={click1}>
          Convert to lowercase
        </button>

        <button className='btn btn-primary mx-3  my-1' onClick={copy}>
          Copy Text
        </button>

        <button className='btn btn-primary mx-3 my-1' onClick={extraspace}>
          Remove Extra space
        </button>
      </div>

      <div
        className='container my-3'
        align='center'
        style={{
          color: props.mode === 'dark' ? 'white' : 'black',
        }}
      >
        <h1>text summery:</h1>
        <p className='text-primary'>
          {text.trim() === ''
            ? 0
            : text.split(' ').filter((word) => {
                return word.length !== 0;
              }).length}
          words and {text.length} characters{' '}
        </p>
        <h2>
          {' '}
          <span className='text-danger'>
            {text.trim() === ''
              ? 0
              : 0.005 * text.split(/\s+/).filter((word) => word !== '').length}
          </span>
          {' time take to read'}
        </h2>
      </div>

      <div
        className='container'
        style={{
          color: props.mode === 'dark' ? 'white' : 'black',
        }}
      >
        <h3>Preview of your text:</h3>
        <p className='my-3 '> {text.length > 0 ? text : 'enter text first'}</p>
      </div>
    </>
  );
}
