/// <reference path="../../../typings/index.d.ts" />

import {IQuestion,IQuestionOption} from "../reducers";
import QuestionOption from "./question-option";

import * as React from "react";

export interface QuestionProps {
    question: IQuestion;
    questionNumber: number;
    answerQuestion: (opt:number) => void;
    nextQuestion: () => void;
    previousQuestion: () => void;
}

export default class Question extends React.Component<QuestionProps,{selectedAnswer?:number}> {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        let options = this.props.question.options.map((option,idx) => {
            return <div className="field" key={idx}>
                <QuestionOption 
                    onClick={() => {
                        if(!$("#quiz-option-" + option.num)["checkbox"]("is checked")) {return;}
                        this.setState({
                            selectedAnswer: option.num
                        });
                    }}
                    q={this.props.question}
                    disabled={this.props.question.answered}
                    option={option} /> 
            </div>;
        });

        let feedback;
        if(this.props.question.answered) {
            $("#quiz-option-" + this.props.question.chosenAnswer)["checkbox"]("check");
            if(this.props.question.isCorrect) {
                feedback = <div className="ui positive message">
                    {this.props.question.correctFeedback}
                </div>
            }
            else {
                feedback = <div className="ui negative message">
                    {this.props.question.wrongFeedback}
                    <br />
                    The correct answer is option #{this.props.question.correctAnswer}
                </div>
            }
        }

        let buttons = [];

        if(this.props.questionNumber > 0) {
            buttons.push(<button key={0} className="ui button" onClick={this.props.previousQuestion}>Previous</button>);
        }
        else {
            buttons.push(<button key={0} className="ui disabled button">Previous</button>);
        }

        if(this.props.question.answered) {
            buttons.push(<button
                key={1}
                className="ui right floated button"
                onClick={() => {
                    $(".checkbox")["checkbox"]("uncheck");
                    this.setState({selectedAnswer: null})
                    this.props.nextQuestion();

                }}>Next</button>);
        }
        else if(this.state.selectedAnswer) {
            buttons.push(<button
                key={1}
                className="ui right floated button"
                onClick={() => {this.props.answerQuestion(this.state.selectedAnswer)}}>Answer</button>);
        }

        return <div className="ui form">
            <div className="grouped fields">
                {feedback}
                <h4>{this.props.question.question}</h4>
                {options}
                <div className="field">
                    {buttons}
                </div>
            </div>
        </div>;
    }
}
