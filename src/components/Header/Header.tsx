import React from 'react'
import logo from '../../assets/img/reichbaum-logo.svg'
import css from './Header.module.css'
import {Container} from '@material-ui/core'

const Header = () => {
  return <header className={css.header}>
    <Container>
      <a className={css.logo} href='/'><img src={logo} alt='Reichbaum'/></a>
    <p className={css.title}>Middle Frontender React</p>
    </Container>
  </header>
}
export default Header