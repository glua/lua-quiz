import {Footer} from "../components/footer";

import {connect} from "react-redux";

import {IAppState} from "../reducers";

function mapStateToProps(state:IAppState) {
    return {
        questionNumber: state.currentQuestionNumber,
        correct: state.numCorrect,
        total: state.questions.length
    }
}

function mapDispatchToProps(dispatch) {
    return {
        
    }
}

export const ActiveFooter = connect(
    mapStateToProps,
    mapDispatchToProps
)(Footer);
