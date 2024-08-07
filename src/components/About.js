import React, { useState } from 'react';

export default function About() {
  const [Mystyle, setMystyle] = useState({
    color: 'black',
    backgroundColor: 'white',
  });

  const [btntoggle, setBtnToggle] = useState('Dark Mode');

  const Mode = () => {
    if (Mystyle.color === 'black') {
      setMystyle({
        color: 'white',
        backgroundColor: 'black',
      });
      setBtnToggle('Light Mode');
    } else {
      setMystyle({
        color: 'black',
        backgroundColor: 'white',
      });
      setBtnToggle('Dark Mode');
    }
  };

  return (
    <>
      <div className='container'>
        {/* <button className='btn btn-primary mx-3' onClick={Mode}>
          {btntoggle}
        </button> */}
      </div>

      <div className='container'>
        {/* style={Mystyle} */}
        <h1 className='my-3 text-primary' align='center'>
          About Us
        </h1>
        <p className='my-10' align='center'>
          Lorem ipsum dolor sit amet{' '}
          <span className='text-danger'>consectetur</span> adipisicing elit.
          Magnam sed quos maxime doloribus harum minus quae, dicta,
          reprehenderit ab dolorem corporis tempora ut accusantium unde quisquam
          dolore ea nobis inventore. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Ea culpa non nulla, eum illo quidem aliquam minima a
          repudiandae, nesciunt, sunt deserunt tenetur! Delectus accusamus
          eligendi quibusdam temporibus placeat ratione aspernatur aliquid natus
          expedita laudantium animi minima, ab laboriosam libero illum harum sit
          rerum repellendus soluta voluptate. Deserunt, sunt sequi.
        </p>
      </div>
    </>
  );
}
