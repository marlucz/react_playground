import React from 'react';

const AppHeader = () => {
    return (
        <header className="ui fixed menu">
        <nav className="ui container">
          <a href="/" className="header item">
            Users List
          </a>
          <div className="header item">
            <button className="ui button">Add</button>
          </div>
        </nav>
      </header>
     );
}

export default AppHeader;