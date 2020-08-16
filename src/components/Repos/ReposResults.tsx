import React from 'react'
import Paginator from '../Paginator/Paginator'
import {Box, List, ListItem} from '@material-ui/core'
import {actions, InitialRepoType} from '../../redux/RepoReducer'
import SingleRepo from './SingleRepo'
import {useDispatch, useSelector} from 'react-redux'
import {AppStateType} from '../../redux/store'

export const ReposResults = () => {
  const repos = useSelector((state: AppStateType) => state.repos.repositories)
  const org = useSelector((state: AppStateType) => state.repos.org)
  const number_of_pages = useSelector((state: AppStateType) => state.repos.number_of_pages)
  const current_page = useSelector((state: AppStateType) => state.repos.current_page)
  const per_page = useSelector((state: AppStateType) => state.repos.per_page)

  const dispatch = useDispatch()

  const onPageChanged = (event: object, page: number) => {
    const PaginatorValues = {
      org, number_of_pages, current_page, per_page
    }
    dispatch(actions.fetchRepos(PaginatorValues, page))
  }

  return <Box>
    {repos.length !== 0 ? <Paginator onPageChanged={onPageChanged}
                                     number_of_pages={number_of_pages}
                                     current_page={current_page} /> : null}
    <List>
      {repos.map((r: InitialRepoType) => <ListItem key={r.id}>
        <SingleRepo name={r.name}
                    html_url={r.html_url}
                    forks_count={r.forks_count}
                    stargazers_count={r.stargazers_count}
                    watchers_count={r.watchers_count}
                    description={r.description}

        />
      </ListItem>)}
    </List>
    {repos.length !== 0 ? <Paginator onPageChanged={onPageChanged}
                                     number_of_pages={number_of_pages}
                                     current_page={current_page} /> : null}
  </Box>
}