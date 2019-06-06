import React, { Component } from "react";
import './Die.css';

class Die extends Component {
    numberToStr(num) {
        const compMap = {
            1: "one",
            2: "two",
            3: "three",
            4: "four",
            5: "five",
            6: "six"
        };
        return compMap[num];
    }

    render() {
        let iconNumber = this.numberToStr(this.props.num);
        let iconClassName;
        if (this.props.isRolling) {
            iconClassName = `fas fa-dice-${iconNumber} Die-animate`;
        } else {
            iconClassName = `fas fa-dice-${iconNumber}`;
        }
        return (
            <i className={iconClassName + " Die"} />
        );
    }
}

export default Die;
