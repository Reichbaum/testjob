import React from 'react'
import logo from '../../assets/img/reichbaum-logo.svg'
import css from './Header.module.css'
import {Container, Link} from '@material-ui/core'

const Header = () => {
  return <header className={css.header}>
    <Container>
      <a className={css.logo} href={process.env.PUBLIC_URL}><img src={logo} alt='Reichbaum'/></a>
    <p className={css.title}>Frontender React</p> <Link variant='body2' href='https://github.com/Reichbaum/testjob'>Github</Link>

    </Container>
  </header>
}
export default Header