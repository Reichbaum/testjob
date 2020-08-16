import React, {FC} from "react";
import css from './Contacts.module.css'
import {Link, List, ListItem, ListItemIcon, ListItemText, Typography} from '@material-ui/core'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TelegramIcon from '@material-ui/icons/Telegram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import AppsIcon from '@material-ui/icons/Apps';

const ListItemLink = (props: any) => {
  return <ListItem component="a" {...props} />;
}

const Contacts = () => {
  return <div>
    <Typography variant="h1" component="h1" gutterBottom>
      Контакты
    </Typography>
    <List className={css.contactsList}>
      <ListItem>
        <ListItemLink href="https://reichbaum.ru/projects" target='_blank' rel="noopener">
          <ListItemIcon>
            <AppsIcon color='secondary' fontSize='large'/>
          </ListItemIcon>
          <ListItemText
            primary='Porfolio'/>
        </ListItemLink>
      </ListItem>
      <ListItem>
        <ListItemLink href="https://www.facebook.com/?id=100009515889198" target='_blank' rel="noopener">
          <ListItemIcon>
            <FacebookIcon htmlColor='#3b5998' fontSize='large'/>
          </ListItemIcon>
        <ListItemText
          primary='Facebook'/>
        </ListItemLink>
      </ListItem>
      <ListItem>
        <ListItemLink href="https://www.instagram.com/reichbaum.ju" target='_blank' rel="noopener">
          <ListItemIcon>
            <InstagramIcon htmlColor='#bc2a8d' fontSize='large'/>
          </ListItemIcon>
          <ListItemText
            primary='Instagram'/>
        </ListItemLink>
      </ListItem>
      <ListItem>
        <ListItemLink href="https://resolve/?domain=ReichbaumJu" target='_blank' rel="noopener">
          <ListItemIcon>
            <TelegramIcon htmlColor='#0088cc' fontSize='large'/>
          </ListItemIcon>
          <ListItemText
            primary='Telegram'/>
        </ListItemLink>
      </ListItem>
      <ListItem>
        <ListItemLink href="https://api.whatsapp.com/send?phone=79180635700" target='_blank' rel="noopener">
          <ListItemIcon>
            <WhatsAppIcon htmlColor='#4AC959' fontSize='large'/>
          </ListItemIcon>
          <ListItemText
            primary='WhatsApp'/>
        </ListItemLink>
      </ListItem>
    </List>
  </div>
}

export default Contacts