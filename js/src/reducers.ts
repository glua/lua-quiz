/// <reference path="../../typings/index.d.ts" />

import {EQuizEvent,IQuizEvent,IQuestionAnsweredEvent} from './actions'

// import * as objectAssign from "object-assign";
let objectAssign = require("object-assign");

import * as update from "react-addons-update";

export interface IQuestionOption {
    num: number;
    option: string;
    isCorrect: boolean;
    wasSelected: boolean;
}

export interface IQuestion {
    answered: boolean;
    question: string;
    chosenAnswer?: number;
    isCorrect?: boolean;
    correctAnswer: number;
    correctFeedback: string;
    wrongFeedback: string;
    options: IQuestionOption[];
}

export interface IAppState {
    questions: IQuestion[];
    currentQuestionNumber: number;
    numCorrect: number;
    isFinished: boolean;
}

let questions:IQuestion[] = window["QuestionList"].map((question) => {
    question.answered = false;
    question.options = question.options.map((option,idx) => {
        return {
            num: idx + 1,
            option: option,
            isCorrect: question.correctAnswer == (idx + 1)
        };
    });
    return question;
});

const initialState:IAppState = {
    questions: questions,
    currentQuestionNumber: 0,
    numCorrect: 0,
    isFinished: false
}

export default function quizApp(state:IAppState = initialState,action:(IQuizEvent|IQuestionAnsweredEvent)) {
    switch(action.type) {
        case EQuizEvent.NEXT_QUESTION: {
            let isFinished = (state.currentQuestionNumber + 1) == state.questions.length;
            return update(state,{
                currentQuestionNumber: {
                    $set: Math.min(state.questions.length - 1,state.currentQuestionNumber + 1)
                },
                isFinished: {
                    $set: isFinished
                }
            });
        }
        case EQuizEvent.PREVIOUS_QUESTION: {
            return update(state,{
                currentQuestionNumber: {
                    $set: Math.max(0,state.currentQuestionNumber - 1)
                }
            });
        }
        case EQuizEvent.ANSWERED_QUESTION: {
            if(state.questions[state.currentQuestionNumber].answered) {
                // no takesies backsies!
                return state;
            }

            let isCorrect = ((<IQuestionAnsweredEvent>action).optionNumber == state.questions[state.currentQuestionNumber].correctAnswer);

            return update(state,{
                questions: {
                    [state.currentQuestionNumber]: {
                        chosenAnswer: {
                            $set: (<IQuestionAnsweredEvent>action).optionNumber
                        },
                        isCorrect: {
                            $set: isCorrect
                        },
                        answered: {
                            $set: true
                        }
                    }
                },
                numCorrect: {
                    $set: (isCorrect ? state.numCorrect + 1 : state.numCorrect)
                }
            });
        }
        default: {
            return state;
        }
    }
}
