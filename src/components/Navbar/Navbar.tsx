import React from 'react';
import css from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={css.nav}>
    <ul>
      <li>
        <NavLink to='/test' activeClassName={css.active}>Тестовое задание</NavLink>
      </li>
      <li>
        <NavLink to='/aboutme' activeClassName={css.active}>Обо мне</NavLink>
      </li>
      <li>
        <NavLink to='/contacts' activeClassName={css.active}>Контакты</NavLink>
      </li>
    </ul>
  </nav>
  )
}

export default Navbar;