import React from 'react'
import {NavLink} from "react-router-dom"
import style from "./Header.module.css"

function Header() {
  return(
    <ul className={style.header}>
      <li><NavLink to="/best-stories">Best Stories</NavLink></li>
      <li><NavLink to="/top-stories">Top Stories</NavLink></li>
      <li><NavLink to="/new-stories">New Stories</NavLink></li>
    </ul>
  );
}

export default Header