import React, { useState } from 'react';

function Header(){

    return (
        <header className="desktop-header">
        <div className="header-title">
          <span className="title">DashBoard</span>
        </div>
        <div className="searchipt">
          <input type="text" placeholder="Search" />
        </div>
        <div className="header-btn">
          <button className="import-btn">Import</button>
          <button className="export-btn">Export</button>
        </div>
        <div className="header-rightset">
          <div className="notification">
            <img className="side-image" src="../static/images/information.svg" alt="information" style="margin-top: 24px;" />
          </div>
          <div className="header-icon-wrap">
            <i className="min-win win-icon" style="background-color: #BBA5AD;"></i>
            <i className="close-win win-icon" style="margin-left: 6px; background-color: #DE4D59;"></i>
          </div>
        </div>
      </header>
    )
}

export default Header;
