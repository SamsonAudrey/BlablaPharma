import {connect} from 'react-redux';
import RegisterPage_Pharmacist from '../Pages/RegisterPage_Pharmacist'

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

const RegisterPharmacist = connect(
    mapStateToProps,
    mapDispatchToProps,
)(RegisterPage_Pharmacist);

export default RegisterPharmacist;
