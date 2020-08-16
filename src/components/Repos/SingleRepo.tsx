import React, {FC} from 'react'
import css from './Repos.module.css'
import StarIcon from '@material-ui/icons/Star';
import DeviceHubIcon from '@material-ui/icons/DeviceHub';
import VisibilityIcon from '@material-ui/icons/Visibility';

type SingleRepoType = {
  name: string
  html_url: string
  forks_count: number
  stargazers_count: number
  watchers_count: number
  description: string
}

const SingleRepo: FC<SingleRepoType> = ({name,
                                          html_url,
                                          forks_count,
                                          stargazers_count,
                                          watchers_count,
                                        description}) => {
  return <div className={css.singleRepo}>
    <a href={html_url} className={css.link}>{name}</a>
    <p>{description}</p>
    <div className={css.features}>
      <div className={css.iconWrapper}><StarIcon fontSize='small'/>Star <span>{stargazers_count}</span></div>
      <div className={css.iconWrapper}><DeviceHubIcon fontSize='small'/>Fork <span>{forks_count}</span></div>
      <div className={css.iconWrapper}><VisibilityIcon fontSize='small'/>Watch <span>{watchers_count}</span></div>
    </div>

  </div>
}


export default SingleRepo