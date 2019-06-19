import * as React from "react";

const Navigation = () => {
  return (
    <nav
      className='navbar navbar-expand-lg navbar-dark bg-dark fixed-top'
      id='mainNav'
    >
      <div className='container'>
        <a className='navbar-brand js-scroll-trigger' href='#page-top'>
          KLUG+MILKE
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarResponsive'
          aria-controls='navbarResponsive'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navbarResponsive'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
              <a className='nav-link js-scroll-trigger' href='#about'>
                About Us
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link js-scroll-trigger' href='#services'>
                We're hiring!
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link js-scroll-trigger' href='#contact'>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
