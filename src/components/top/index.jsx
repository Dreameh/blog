import React from 'react'
import { Link } from 'gatsby'
import { GitHubIcon } from '../social-share/github-icon'

import './index.scss'

export const Top = ({ title, location, rootPath }) => {
  const isRoot = location.pathname === rootPath
  return (
    <div className="top">
      {!isRoot && (
        <Link to={`/`} className="link">
          {title}
        </Link>
      )}
      <Link to={`/about`} className="menu-item">
        About
      </Link>
      <Link to={`/lists`} className="menu-item">
        Lists
      </Link>
    </div>
  )
}
