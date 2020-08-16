import React from 'react'
import {Divider, Grid, List, ListItem, ListItemIcon, ListItemText, Typography} from '@material-ui/core'
import me from '../../assets/img/reich.jpg'
import NotInterestedIcon from '@material-ui/icons/NotInterested'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline'
import {
  Timeline,
  TimelineConnector, TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator
} from '@material-ui/lab'

const Aboutme = () => {
  return <div>
    <Typography variant='h1' component='h1' gutterBottom>
      Привет, меня зовут Юлия
    </Typography>
    <Grid container>
      <Grid item xs={12} sm={3}>
        <img src={me} width={150} className='avatar' alt='Reichbaum Julia'/>
      </Grid>
      <Grid item xs={12} sm={9}>
        <Typography variant="body1" paragraph>
          Мне 38 лет, я родом из Иркутска, сейчас живу в Анапе. 7 лет занимаюсь фрилансерской веб-разработкой -
          разрабатываю и поддерживаю сайты, в основном, по рекомендациям моих клиентов - <a
          href='https://reichbaum.ru/projects' target='_blank' rel='noopener noreferrer'>вот они</a>. Попробовав себя в
          качества
          наставника на онлайн-курсах по HTML и CSS, я поняла, что работая в одиночку я не развиваюсь, поэтому
          приняла решение - изучить актуальные инструменты фронтенда и попробовать себя в командной работе на
          современном проекте.
        </Typography>
      </Grid>
    </Grid>
    <Typography variant="body1" paragraph>
      Мои скиллы - хорошо знаю HTML, CSS, адаптивную верстку, владею графическими программами. Javacript - на уровне
      реализации не очень сложных практических задач, сейчас изучаю теоретическую часть. PHP - на рабочем уровне, в
      силу плотной работы с Вордпрессом. Разобралась с препроцессорами (Less/Sass), научилась Git, поняла суть Gulp,
      использую в работе. В теорию углубляюсь по мере надобности, умею гуглить, находить и
      адаптировать код под собственные нужды. Английский - читаю хорошо, разговорный - на уровне бытового общения.

    </Typography>
    <Typography variant="body1" paragraph>
      Сейчас очень интересен React и сопутствующие технологии - знакома с Typescript, Redux, Axios, Thunk/Saga, Formik,
      Material UI. Хочу в команду под начало крутых
      разработчиков для работы и дальнейшего обучения на боевых задачах. Текущие проекты времени почти не требуют, новых
      не беру,
      имею
      цель.
    </Typography>
    <Divider className='gutterBottom'/>
    <Typography variant="h2" component="h2">
      Образование
    </Typography>
    <List>
      <ListItem>
        <ListItemIcon>
          <NotInterestedIcon color='error'/>
        </ListItemIcon>
        <ListItemText
          primary='2 курса ВятГТУ Электропривод и автоматизация промышленных установок (хотела на ИТ, завалила физику. Не то.)'/>
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <NotInterestedIcon color='error'/>
        </ListItemIcon>
        <ListItemText primary='1 курс ИГУ Теоретическая физика (на ИТ не восстановили из-за несоответствия
      программы. Вообще не то.)'/>
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <CheckCircleOutlineIcon color='secondary'/>
        </ListItemIcon>
        <ListItemText
          primary='ИрГУПС Управление персоналом (зачислили вместо отмененной специальности ИТ. Решила, что не судьба, осталась тут.'/>
      </ListItem>
    </List>
    <Typography variant="body2" paragraph>
      В общем, по теоретической части классического программирования я обладаю не самыми глубокими знаниями, но имею
      технический склад ума и
      способность разобраться и решить любую взятую на себя задачу, разобрав ее на более мелкие.
    </Typography>
    <Divider className='gutterBottom'/>
    <Typography variant="h2" component="h2">
      Работа
    </Typography>
    <Timeline align="alternate">
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography color="textSecondary">Октябрь, 2018 — Настоящее время</Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot/>
          <TimelineConnector/>
        </TimelineSeparator>
        <TimelineContent>
          <Typography>Контракт на разработку и поддержку сайта <a href='https://www.bahn-erlebnisreise.de/'
                                                                  target='_blank' rel="noopener noreferrer">Die
            Eisenbahn Erlebnisreise</a> (Deutchland, Düsseldorf). <br/>
            CMS Wordpress - редизайн, решение всех задач по внедрению нового
            функционала (PHP + Javascript). Интеграция с аггрегатором Journaway.com. <a
              href='https://reichbaum.ru/projects' target='_blank' rel="noopener noreferrer">Всякий
              фриланс.</a></Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography color="textSecondary">Декабрь, 2012 — Сентябрь 2018</Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot/>
          <TimelineConnector/>
        </TimelineSeparator>
        <TimelineContent>
          <Typography>Свой небольшой интернет-магазин для семейного бизнеса <a
            href='https://ultrairk.ru' target='_blank' rel="noopener noreferrer">Автосигнализации</a> (сейчас не
            обновляется) -
            разработка сайта
            CMS Opencart, наполнение
            контентом, развитие проекта. Фриланс. </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography color="textSecondary">Апрель, 2010 —
            Ноябрь, 2012</Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot/>
          <TimelineConnector/>
        </TimelineSeparator>
        <TimelineContent>
          <Typography><b>ТГ ВОСТОК КОСМЕТИК, НАЧАЛЬНИК ОТДЕЛА ИНТЕРНЕТ-МАГАЗИНА</b><br/>
            Реализация интернет-магазина бытовой химии и косметики Irmag.ru на базе
            крупной оптовой компании — разработка идей и постановка задач техническим специалистам-разработчикам на
            стороне сайта (CMS Bitrix), встраивание
            магазина во внутренние процессов компании. Разработка структуры каталога,
            подготовка изображений и описаний товаров, наполнение сайта контентом
            (25000 наименований). Запуск интернет-магазина.</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography color="textSecondary">Декабрь, 2006 — Октябрь, 2009</Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot/>
          <TimelineConnector/>
        </TimelineSeparator>
        <TimelineContent>
          <Typography><b>ТЕЛЕКОМПАНИЯ АИСТ, ДИЗАЙНЕР-ВЕРСТАЛЬЩИК</b><br/>
            Верстка еженедельной газеты и журнала на тему «Телевидение,
            кино, музыка, шоу-бизнес», разработка рекламных макетов, подготовка изображений и текстов к публикации.
            Дизайн полиграфии, разработка фирменного
            стиля по заказу.</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography color="textSecondary">Октябрь, 2004 — Сентябрь, 2006</Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot/>
          <TimelineConnector/>
        </TimelineSeparator>
        <TimelineContent>
          <Typography><b>РЕКЛАМНО-ИЗДАТЕЛЬСКАЯ ФИРМА «ГВОЗДЬ ПЛЮС»,
            ДИЗАЙНЕР-ВЕРСТАЛЬЩИК</b><br/>
            Верстка еженедельного рекламного журнала-каталога, разработка рекламных
            макетов и статей. Дизайн полиграфии, разработка фирменного стиля по заказу.</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography color="textSecondary">Ноябрь 2001 - Сентябрь, 2004</Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot/>
          <TimelineConnector/>
        </TimelineSeparator>
        <TimelineContent>
          <Typography><b>ИЗДАТЕЛЬСКИЙ ДОМ «СМ НОМЕР ОДИН», ОПЕРАТОР ПК</b><br/>
            Работа с табличными данными.</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  </div>
}

export default Aboutme