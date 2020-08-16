import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {AppStateType} from '../../redux/store'
import {Field, Form, Formik} from 'formik'
import {GetReposType} from '../../api/repos-api'
import {actions} from '../../redux/RepoReducer'
import {ReposResults} from './ReposResults'
import Preloader from '../Preloader/Preloader'
import css from './Repos.module.css'
import {Box, Button} from '@material-ui/core'
import {TextField} from 'formik-material-ui'

export const ReposForm = () => {

  const error = useSelector((state: AppStateType) => state.repos.error)
  const loading = useSelector((state: AppStateType) => state.repos.loading)
  const dispatch = useDispatch()

  const org = useSelector((state: AppStateType) => state.repos.org)
  const number_of_pages = useSelector((state: AppStateType) => state.repos.number_of_pages)
  const per_page = useSelector((state: AppStateType) => state.repos.per_page)
  const error_message = useSelector((state: AppStateType) => state.repos.error_message)

  return <Formik
    initialValues={{
      org: org ? org : 'google',
      per_page: per_page ? per_page : 10,
      number_of_pages: number_of_pages ? number_of_pages : 1
    }}
    onSubmit={(values: GetReposType, {setSubmitting}) => {
      dispatch(actions.fetchRepos(values, 1))
      setSubmitting(false)
    }}>
    {({isSubmitting}) => (
      <Form className={css.repoForm}>
        <Box className={css.repoContainer}>
          <Field
            name="org"
            label="Organisation"
            margin="normal"
            variant="filled"
            className={css.inputText}
            component={TextField}
          />
          <Field
            name="per_page"
            label="Per page"
            type="number"
            margin="normal"
            variant="filled"
            className={css.inputNumber}
            component={TextField}
          />
          <Field type="hidden" name="number_of_pages"/>
        </Box>

        <Button variant="contained" color="primary" type="submit" disabled={isSubmitting}>
          Submit
        </Button>
        {
          loading
            ? <Preloader />
            : error
            ? <p>Error! {error_message}</p>
            : <ReposResults />
        }
      </Form>

    )}
  </Formik>
}