import React, {FC} from 'react'
import {Button, List, ListItem, ListItemIcon, ListItemText, Typography} from '@material-ui/core'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline'
import css from './Frontpage.module.css'
import {NavLink} from 'react-router-dom'

const Frontpage = () => {
  return <div>
   <Typography variant="body1" gutterBottom>
     Задача: Разработать SPA для отображения списка репозиториев и информации по какой-либо компании
      на Github. Предусмотреть поле ввода названия компании, лоадер загрузки при запросе, отображение списка
      репозиториев.<br/>
      В список выводимой информации должны быть включены:
    </Typography>
    <List className={css.list}>
      <ListItemTask text='Название'/>
      <ListItemTask text='URL репозитория (можно совместить с выводом имени)'/>
      <ListItemTask text='Количество форков, количество watchers'/>
      <ListItemTask text='Количество звезд у репозитория (stargazers)'/>
    </List>
    <NavLink to='/test'><Button variant="contained" color="primary">Перейти к заданию</Button></NavLink>
  </div>
}

type ListItemTaskType = {
  text: string
}

const ListItemTask: FC<ListItemTaskType> = ({text}) => {
  return <ListItem>
    <ListItemIcon>
      <CheckCircleOutlineIcon color='secondary'/>
    </ListItemIcon>
    <ListItemText primary={text}/>
  </ListItem>
}

export default Frontpage