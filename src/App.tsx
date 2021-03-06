import React from 'react'
import {HashRouter, Route, Switch} from 'react-router-dom'
import './App.css'
import {ReposList} from './components/Repos/ReposList'
import {Provider} from 'react-redux'
import store from './redux/store'
import {Container, Grid} from '@material-ui/core'
import Header from './components/Header/Header'
import Aside from './components/Aside/Aside'
import {ThemeProvider} from '@material-ui/styles'
import theme from './assets/theme/theme'
import Aboutme from './components/Aboutme/Aboutme'
import Contacts from './components/Contacts/Contacts'
import Frontpage from './components/Frontpage/Frontpage'
import 'typeface-roboto'

function AppContainer() {
  return (
      <div className="app">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Header/>
          </Grid>
          <Container>
            <Grid container spacing={5}>
              <Grid item xs={12} sm={3} >
                <Aside />
              </Grid>
              <Grid item xs={12} sm={9}>
                <div className='content'>
                  <Switch>
                    <Route path='/test' render={() => <ReposList />}/>
                    <Route path='/contacts' render={() => <Contacts />}/>
                    <Route path='/aboutme' render={() => <Aboutme />}/>
                    <Route exact path='/' render={() => <Frontpage />}/>
                  </Switch>
                </div>
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </div>
  )
}

const App = () => {
  return <React.StrictMode>
    <HashRouter>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
      <AppContainer/>
      </ThemeProvider>
    </Provider>
    </HashRouter>
  </React.StrictMode>
}

export default App
