import React from 'react';
import { ReactComponent as Overview } from '../../images/icons/overview.svg'
import { ReactComponent as Papers } from '../../images/icons/papers.svg'
import { ReactComponent as Talks } from '../../images/icons/talks.svg'
import { ReactComponent as Members } from '../../images/icons/group.svg'
import { ReactComponent as Settings } from '../../images/icons/settings.svg'

const Sidebar = () => {
  return (
    <aside className='sidebar'>
      <nav className='sidebar__nav sidebar-nav' aria-label='Community navigation'>
        <ul>
          <li className='sidebar-nav__link sidebar-nav__link_active'>
            <a href='#'>
              <Overview/> Overview
            </a>
          </li>
          <li className='sidebar-nav__link'>
            <a href='#'>
              <Papers/> Requests
            </a>
          </li>
          <li className='sidebar-nav__link'>
            <a href='#'>
              <Talks/> Talks
            </a>
          </li>
          <li className='sidebar-nav__link'>
            <a href='#'>
              <Members/> Team
            </a>
          </li>
          <li className='sidebar-nav__link'>
            <a href='#'>
              <Settings/> Settings
            </a>
          </li>
          <li className='sidebar-nav__link sidebar-nav__link_button-type'>
            <a href='#'>Visit community page</a>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar;
