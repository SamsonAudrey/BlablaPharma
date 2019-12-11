import {connect} from 'react-redux';
import AuthPage from '../Pages/AuthPage'


const mapStateToProps = state => {
  return { test : 'tt'}
}

const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    increment: () => dispatch({ type: 'INCREMENT' }),
    decrement: () => dispatch({ type: 'DECREMENT' }),
    reset: () => dispatch({ type: 'RESET' })
  }
}

const Auth = connect(
    mapStateToProps,
    mapDispatchToProps,
  )(AuthPage);

  export default Auth;
