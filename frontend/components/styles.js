import muiTheme from './theme';
import transitions from 'material-ui/styles/transitions';

const styles = {
  noteOptions: {
    active: {
      minHeight: muiTheme.menuItem.height,
      height: muiTheme.menuItem.height,
      opacity: "1",
      transition: transitions.create(null, null, null, transitions.easeOutFunction)
    },
    inactive: {
      minHeight: "0px",
      height: "0px",
      opacity: "0",
      transition: `${transitions.create(null, null, null, transitions.easeOutFunction)}, opacity 0ms`
    },
    select: {
      transition: transitions.create(null, null, null, transitions.easeOutFunction),
      backgroundColor: muiTheme.palette.primary3Color
    },
    unselect: {
      transition: transitions.create(null, null, null, transitions.easeOutFunction),
      background: "none"
    }
  },
  songOptions: {
    active: {
      paddingLeft: "16px",
      height: "72px",
      opacity: "1",
      transition: transitions.create(null, null, null, transitions.easeOutFunction)
    },
    inactive: {
      paddingLeft: "16px",
      height: "0px",
      opacity: "0",
      transition: transitions.create(null, null, null, transitions.easeOutFunction)
    },
    inputStyle: {
      fontWeight: "bold",
    }
  },
  icon: {
    active: {
      transition: transitions.create(null, null, null, transitions.easeOutFunction),
      transform: "rotateZ(180deg)",
    },
    inactive: {
      transition: transitions.create(null, null, null, transitions.easeOutFunction),
      transform: "rotateZ(0deg)",
    }
  },
  page: {
    position: "fixed",
    top: muiTheme.appBar.height,
    left: muiTheme.drawer.width,
    height: `${window.innerHeight - muiTheme.appBar.height}px`,
    width: `${window.innerWidth - muiTheme.drawer.width}px`,
    padding: `${muiTheme.spacing.desktopGutter}px`,
    boxSizing: "border-box"
  },
  pageHeader: {
    lineHeight: `${muiTheme.menuItem.dataHeight}px`,
    height: `${muiTheme.menuItem.height}px`,
    fontFamily: `${muiTheme.fontFamily}`,
    fontSize: `${muiTheme.dialog.titleFontSize}px`
  }
}

export default styles;
