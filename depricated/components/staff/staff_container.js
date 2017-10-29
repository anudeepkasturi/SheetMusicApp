import { connect } from 'react-redux';
import Staff from './staff';

const mapStateToProps = state => ({
  song: state.song
});

const mapDispatchToProps = ( dispatch ) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Staff);
