import Header from './Header'
import { connect } from 'react-redux'
import { logOutAccountAC } from '../../redux/LogIn-Reducer'

let mapStateToProps = (state) => {
    return {
        isLogged: state.logInPage.isLogged
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onLogOut: () => dispatch(logOutAccountAC())
    }
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header)

export default HeaderContainer