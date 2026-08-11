import React from 'react';

/**
 * @function NavComponent
 * @param {Component} childComponent
 * @param {Number} width
 * @param {Number} height
 * @param {Number} zIndex
 * @param {String} backgroundColor
 * @param {String} textColor 
 * @returns Html Container
 * @description Render a customizable nav container.
 */
const NavComponent = ({ childComponent, width = 100, height = 100, zIndex = 1, backgroundColor = '#eb0a1e', textColor = '#FFFFFF' }) => {

  var customNav = {
    position: 'fixed',//'absolute',
    width: `${width}%`,
    height: `${height}%`,
    zIndex: `${zIndex}`,
    backgroundColor: `${backgroundColor}`,
    color: textColor,
    overflow: 'hidden',
    boxShadow: '10px 0 5px -2px #74747457'
  }

  return (
    <div style={customNav}>
      {childComponent}
    </div>
  );
};

export { NavComponent };