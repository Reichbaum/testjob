import React from 'react'
import css from './Aside.module.css'
import Navbar from '../Navbar/Navbar'

const Aside = () => {
  return <aside className={css.aside}>
    <Navbar/>
  </aside>
}

export default Aside