import LogIn from './LogIn'
import { connect } from 'react-redux'
import { logInAccountAC, createAccountAC, checkLoginAC } from '../../redux/LogIn-Reducer'

let mapStateToProps = (state) => {
    return {
        isLogged: state.logInPage.isLogged,
        createdAccount: state.logInPage.createdAccount,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onLoginIn: (l, p) => dispatch(logInAccountAC(l, p)),
        onCheckLogin: () => dispatch(checkLoginAC()),
        onCreateAccount: (m, l, p) => dispatch(createAccountAC(m, l, p)),
    }
}

const LogInContainer = connect(mapStateToProps, mapDispatchToProps)(LogIn)

export default LogInContainer