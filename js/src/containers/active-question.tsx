import Question from "../components/question";
import {answerQuestion,nextQuestion,previousQuestion} from "../actions";
import {IQuestion} from "../reducers";

import {connect} from "react-redux";

import {IAppState} from "../reducers";

function mapStateToProps(state:IAppState) {
    return {
        question: state.questions[state.currentQuestionNumber],
        questionNumber: state.currentQuestionNumber
    }
}

function mapDispatchToProps(dispatch) {
    return {
        answerQuestion: (option:number) => {
            dispatch(answerQuestion(option))
        },
        nextQuestion: () => {
            dispatch(nextQuestion())
        },
        previousQuestion: () => {
            dispatch(previousQuestion())
        }
    }
}

export const ActiveQuestion = connect(
    mapStateToProps,
    mapDispatchToProps
)(Question);
