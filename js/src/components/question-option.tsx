/// <reference path="../../../typings/index.d.ts" />

import {IQuestionOption,IQuestion} from "../reducers";

import * as React from "react";

export default class QuestionOption extends React.Component<{option: IQuestionOption, q: IQuestion, onClick: () => void,disabled:boolean},{}> {
    componentDidUpdate() {
        $(".checkbox")["checkbox"]();
    }

    render() {
        let extra;

        // if(this.props.q.answered) {
        //     if(this.props.q.chosenAnswer == this.props.option.num) {
        //         if(this.props.q.isCorrect) {
        //             extra = "CORRECT ANSWER";
        //         }
        //         else {
        //             extra = "WRONG ANSWER";
        //         }
        //     }

        //     if(!this.props.q.isCorrect) {
        //         if(this.props.option.isCorrect) {
        //             extra = "CORRECT ANSWER";
        //         }
        //     }
        // }

        return <div id={"quiz-option-" + this.props.option.num} onClick={this.props.onClick} className={"ui" + (this.props.disabled ? " disabled" : "") + " radio checkbox"}>
            <input name="question-option" onClick={this.props.onClick} type="radio"></input>
            <label><b>{this.props.option.num}.</b> {this.props.option.option} <i>{extra}</i></label>
        </div>;
    }
}
