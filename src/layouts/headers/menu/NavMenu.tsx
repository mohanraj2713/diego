'use client';
import React from 'react';
import { scroller } from 'react-scroll';
import menu_data from './MenuData';

const NavMenu = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    e.preventDefault();
    if (link === '#' || link === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const targetId = link.replace('#', '');
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        scroller.scrollTo(targetId, {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart',
        });
      }
    }
  };

  return (
    <ul>
      {menu_data.map((item) => (
        <li key={item.id}>
          <a href={item.link} onClick={(e) => handleScroll(e, item.link)}>
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavMenu;