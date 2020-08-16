import React, {FC} from 'react'
import {Button, Link, List, ListItem, ListItemIcon, ListItemText, Typography} from '@material-ui/core'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline'
import css from './Frontpage.module.css'

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
    <Button variant="contained" color="primary" href="/test">
      Решение
    </Button>
    <Link variant='body2' href='https://github.com/Reichbaum/testjob'>Github</Link>

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