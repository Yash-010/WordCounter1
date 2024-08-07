// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
// import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';

// import {
//   // createBrowserRouter,
//   BrowserRouter as Router,
//   // Switch,
//   Route,
//   Routes,
//   // Link,
// } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (Message, Type) => {
    setAlert({
      msg: Message,
      type: Type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };
  const togglemode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert('DarkMode enabled', 'success');
      document.title = 'WC-DarkMode';

      // just for advertizing purpose

      // setInterval(() => {
      //   document.title = 'WC is Good';
      // }, 2000);

      // setInterval(() => {
      //   document.title = 'Good To see you';
      // }, 1500);
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('LightMode enabled', 'success');
      document.title = 'WC-LightMode';
    }
  };
  return (
    <>
      {/* <Router> */}
      <Navbar
        title='word counter'
        Abouttitle='About'
        mode={mode}
        togglemode={togglemode}
      />

      <Alert alert={alert} />

      <div className='container'>
        <TextArea showAlert={showAlert} heading='enter text:' mode={mode} />
      </div>
      {/* below code is for router */}
      {/* exact is used for perfect matching otherwise react do the partially matching */}
      {/* <div className='container'>
          <Routes>
            <Route exact path='/about' element={<About />} />
            <Route
              exact
              path='/'
              element={
                <TextArea
                  showAlert={showAlert}
                  heading='enter text:'
                  mode={mode}
                />
              }
            />
          </Routes>
        </div>
      </Router> */}
    </>
  );
}

export default App;
