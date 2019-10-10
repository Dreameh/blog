import React from 'react'
import Header from './Header'
import './layout.css'
import ("../sass/dreameh.scss");

export default ({ children }) => (
  <div>
    <Header />
    <div>
      {children}
    </div>
  </div>
)
