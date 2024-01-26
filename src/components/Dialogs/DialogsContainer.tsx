import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../redux/store";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";
import {Dispatch} from "redux";
import {DialogsPageType} from "../redux/dialogs-Page-Reduсer";


// type mapStateToProps
type MapStatePropsType = {
    dialogsPage: DialogsPageType
}

// type mapDispatchToProps
type MapDispatchPropsType = {
    updateNewMessageBody: () => void
    sendMessage: (body: string) => void
}

export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType



const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPageReducer
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        updateNewMessageBody: () => {
            dispatch(sendMessageActionCreator())
        },
        sendMessage: (body: string) => {
            dispatch(updateNewMessageBodyActionCreator(body))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer



