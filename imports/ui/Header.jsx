import React from 'react';

import Accounts from './Accounts';

function Header() {
  return (
    <nav className='nav navbar-default'>
      <div className='navbar-header'>
        <a className='navbar-brand'>MarkBin</a>
      </div>
      <ul className='nav navbar-nav'>
        <li>
          <Accounts />
        </li>
        <li>
          <a>Create Bin</a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
