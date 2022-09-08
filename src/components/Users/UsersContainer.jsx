import Users from './Users'
import { connect } from 'react-redux'
import { getUsersInfoAC, getMessagesAC, sendMessageAC, checkMessageAC } from '../../redux/Users-Reducer'


let mapStateToProps = (state) => {
    return {
        isLogged: state.logInPage.isLogged,
        allUsersInfo: state.usersPage.allUsersInfo,
        allMessages: state.usersPage.allMessages,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onGetUsersInfo: (i) => dispatch(getUsersInfoAC(i)),
        onGetMessages: (i) => dispatch(getMessagesAC(i)),
        onSendMessage: (to, from, text) => dispatch(sendMessageAC(to, from, text)),
        onCheckMessage: (to, from) => dispatch(checkMessageAC(to, from))
    }
}

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer