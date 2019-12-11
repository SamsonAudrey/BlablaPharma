import {connect} from 'react-redux';
import RegisterPage_Patient from '../Pages/RegisterPage_Patient'

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

const RegisterPatient = connect(
    mapStateToProps,
    mapDispatchToProps,
)(RegisterPage_Patient);

export default RegisterPatient;
