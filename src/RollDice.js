import React, { Component } from "react";
import Die from "./Die";
import './RollDice.css';


class RollDice extends Component {
    constructor(props) {
        super(props);
        this.roll = this.roll.bind(this);
        this.state = {
            firstDiceNum: 1,
            secondDiceNum: 2,
            isRolling: false
        };
    }

    roll() {
        let rand1 = this.randomNum(6);
        let rand2 = this.randomNum(6);

        this.setState({
            firstDiceNum: rand1,
            secondDiceNum: rand2,
            isRolling: true
        });

        setTimeout(() => {
            this.setState({ isRolling: false });
        }, 1000);
    }

    randomNum(max) {
        return Math.floor(Math.random() * max) + 1;
    }

    render() {
        return (
            <div className="RollDice">
                <div className="RollDice-container">
                    <Die
                        num={this.state.firstDiceNum}
                        isRolling={this.state.isRolling}
                    />
                    <Die
                        num={this.state.secondDiceNum}
                        isRolling={this.state.isRolling}
                    />
                </div>
                <button onClick={this.roll} disabled={this.state.isRolling}>
                    {this.state.isRolling ? "Rolling..." : "Roll Dice!"}
                </button>
            </div>
        );
    }
}

export default RollDice;
