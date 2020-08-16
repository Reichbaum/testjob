import {createMuiTheme} from '@material-ui/core'

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#6b5b95',
    },
    secondary: {
      main: '#6dbd1c',
    },
  },
  typography: {
    h1: {
      fontSize: "2.8rem"
    },
    h2: {
      fontSize: "2rem"
    }
  },
});

export default theme