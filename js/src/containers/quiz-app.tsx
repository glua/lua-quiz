import {QuizApp} from "../components/quiz-app";

import {connect} from "react-redux";

import {IAppState} from "../reducers";

function mapStateToProps(state:IAppState) {
    return {
        isFinished: state.isFinished
    }
}

function mapDispatchToProps(dispatch) {
    return {
        
    }
}

export const ActiveQuizApp = connect(
    mapStateToProps,
    mapDispatchToProps
)(QuizApp);
