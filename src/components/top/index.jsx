import React from 'react'
import { Link } from 'gatsby'

import './index.scss'

export const Top = ({ title, location, rootPath }) => {
  const isRoot = location.pathname === rootPath
  return (
    !isRoot && (
    <div className="top">
        <Link to={`/`} className="link-menu">
          {title}
        </Link>
    </div>
    )
  )
}
