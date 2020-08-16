import React from 'react'
import {BrowserRouter, Route, Switch, withRouter} from 'react-router-dom'
import './App.css'
import {ReposList} from './components/Repos/ReposList'
import {Provider} from 'react-redux'
import store from './redux/store'
import {Container} from '@material-ui/core'
import Header from './components/Header/Header'
import Aside from './components/Aside/Aside'
import Frontpage from './components/Frontpage/Frontpage'
import {ThemeProvider} from '@material-ui/styles'
import theme from './assets/theme/theme'
import Aboutme from './components/Aboutme/Aboutme'
import Contacts from './components/Contacts/Contacts'



function AppContainer() {
  return (
      <div className="app">
        <Header/>
        <Container>
        <div className='wrapper'>
        <Aside />
        <div className='content'>
          <Switch>
            <Route exact path='/' render={() => <Frontpage />}/>
            <Route path='/test' render={() => <ReposList />}/>
            <Route path='/contacts' render={() => <Contacts />}/>
            <Route path='/aboutme' render={() => <Aboutme />}/>
          </Switch>
        </div>
        </div>
        </Container>
      </div>
  )
}

const App = () => {
  return <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
      <AppContainer/>
      </ThemeProvider>
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
}

export default App
