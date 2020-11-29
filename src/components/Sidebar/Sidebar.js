import React from 'react';
import { ReactComponent as Overview } from '../../images/icons/overview.svg'
import { ReactComponent as Papers } from '../../images/icons/papers.svg'
import { ReactComponent as Talks } from '../../images/icons/talks.svg'
import { ReactComponent as Members } from '../../images/icons/group.svg'
import { ReactComponent as Settings } from '../../images/icons/settings.svg'

const Sidebar = () => {
  const [activeItem, setActiveItem] = React.useState('')
  const [communityId, setCommunityId] = React.useState('')

  React.useEffect(() => {
    let pageHref = window.location.href.split('/')[4] ? window.location.href.split('/')[4] : window.location.href.split('/')[3];
    if (pageHref.includes('requests') || pageHref.includes('cfp')) {
      let community = window.location.href.split('/')[3];
      setCommunityId(community)
    }
    setActiveItem(pageHref)
  })

  return (
    <aside className='sidebar'>
      <nav className='sidebar__nav sidebar-nav' aria-label='Community navigation'>
        <ul>
          <li className={`sidebar-nav__link ${activeItem.includes('about') && 'sidebar-nav__link_active'}`}>
            <a href='/about'>
              <Overview/> Overview
            </a>
          </li>
          <li className={`sidebar-nav__link ${activeItem.includes('requests') && 'sidebar-nav__link_active'}`}>
            <a href={`/${communityId}/requests`}>
              <Talks/> Requests
            </a>
          </li>
          <li className={`sidebar-nav__link ${activeItem.includes('process') && 'sidebar-nav__link_active'}`}>
            <a href='#'>
              <Papers/> Process board
            </a>
          </li>
          <li className={`sidebar-nav__link ${activeItem.includes('team') && 'sidebar-nav__link_active'}`}>
            <a href='#'>
              <Members/> Team
            </a>
          </li>
          <li className={`sidebar-nav__link ${activeItem.includes('settings') && 'sidebar-nav__link_active'}`}>
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
