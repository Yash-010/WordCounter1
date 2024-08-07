import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}
    >
      <div className='container-fluid'>
        <a className='navbar-brand' href='#'>
          {props.title}
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <a className='nav-link active' aria-current='page' href='#'>
                Home
              </a>

              {/* for router */}
              {/* <Link className='nav-link active' aria-current='page' to='/'>
                Home
              </Link> */}
            </li>
            {/* <li className='nav-item'>
              <a
                className='nav-link'
                style={{
                  color: props.mode === 'dark' ? 'white' : 'black',
                }}
                href='/about'
              >
                {props.Abouttitle}
              </a>
            </li> */}
            {/* <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle'
                href='/'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Dropdown
              </a>
              <ul className='dropdown-menu'>
                <li>
                  <a className='dropdown-item' href='/'>
                    Action
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='/'>
                    Another action
                  </a>
                </li>
                <li>
                  <hr className='dropdown-divider' />
                </li>
                <li>
                  <a className='dropdown-item' href='/'>
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className='nav-item'>
              <a className='nav-link disabled' aria-disabled='true'>
                Disabled
              </a>
            </li>*/}
          </ul>
          {/* <form className='d-flex' role='search'>
            <input
              className='form-control me-2'
              type='search'
              placeholder='Search'
              aria-label='Search'
            />
            <button className='btn btn-outline-success' type='submit'>
              Search
            </button>

           
          </form> */}

          <div className='form-check form-switch mx-2'>
            <input
              className='form-check-input my-3'
              type='checkbox'
              // role='switch'
              id='flexSwitchCheckDefault'
              onClick={props.togglemode}
            />
            <label
              className={`htmlForm-check-label ${
                props.mode === 'dark' ? 'text-light' : 'text-dark'
              } my-2`}
              htmlFor='flexSwitchCheckDefault'
            >
              DarkMode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  Abouttitle: PropTypes.string.isRequired,
};

// Navbar.defaultProps = {
//   title: 'Navbar title',
//   Abouttitle: 'About title',
// };
