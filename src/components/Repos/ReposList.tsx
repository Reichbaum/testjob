import React from 'react'
import {ReposForm} from './ReposForm'
import GitHubIcon from '@material-ui/icons/GitHub'
import {Typography} from '@material-ui/core'

export const ReposList = () => {
  return <div>
    <Typography variant="h1" component="h1" gutterBottom>
      <GitHubIcon fontSize='large'/> List organization repositories
    </Typography>
    <ReposForm/>
  </div>
}

