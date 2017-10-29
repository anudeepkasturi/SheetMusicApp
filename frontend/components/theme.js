import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: "#b2ff59",
    primary2Color: "#512da8",
    primary1Color: "#2196f3"
  },
  zIndex: {
    appBar: 1700
  }
});

export default muiTheme;
