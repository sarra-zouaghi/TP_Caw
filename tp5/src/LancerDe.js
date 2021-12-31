import React, { Component } from 'react'
import De from './De'


export default class LancerDe extends Component {
   
    static defaultProps = {
        faces: [
            "./pics/1.png",
            "./pics/2.png",
            "./pics/3.png",
            "./pics/4.png",
            "./pics/5.png",
            "./pics/6.png"
        ]
    }
    constructor(props) {
        super(props);
        this.state = {
            de1: 0,
            de2: 4,
            lancer: false,
            score: 0,
            tries: 0

        }
        this.lancerDe = this.lancerDe.bind(this);
        this.reset = this.reset.bind(this);
    }
    lancerDe() {
        let random = Math.floor(Math.random() * 6)
        let random2 = Math.floor(Math.random() * 6)
        this.setState(c => {
            return {
                lancer: true,
                tries: c.tries + 1
            }
        })
        setTimeout(() => {
            this.setState(c => {
                return {
                    lancer: false, de1: random,
                    de2: random2,
                    score: random === random2 ? c.score + 1 : c.score - 1
                }
            })
        }, 1500);
    }
    reset() {
        this.setState(c => {
            return {
                de1: 0,
                de2: 4,
                lancer: false,
                score: 0,
                tries: 0
            }
        })
    }
    render() {
        let msg = "";
        if (!this.state.lancer) {
            if (this.state.de1 === this.state.de2) {
                msg = "You win !"
            }
            else {
                if (this.state.tries === 0) {
                    msg = '';
                } else {
                    msg = "Try again"
                }
            }
            if (this.state.tries === 10) {
                msg = this.state.score <= 0 ? "your score is bellow 0 :( better luck next time" : "Good score keep it up"
            }
        }
        return (

            <div >
                <div className='lancer'>
                    <De de={this.props.faces[this.state.de1]} alt={this.state.de1 + 1} lancer={this.state.lancer} />
                    <De de={this.props.faces[this.state.de2]} alt={this.state.de2 + 1} lancer={this.state.lancer} />
                </div>
                <p style={{ color: msg === "You win !" ? "rgb(25, 68, 11)" : "rgb(208, 235, 199)" }} className={"ptext "}>{msg}</p>

                {this.state.tries < 10 ? <button disabled={this.state.lancer} onClick={this.lancerDe} class="btn">

                    {this.state.lancer ? <span class="spinner"></span>
                        : <span class="btn__text">Lancer les des</span>}
                </button>
                    : <button onClick={this.reset} class="btn reset">
                        {this.state.lancer ? <span class="spinner"></span>
                            : <span class="btn__text">Reset</span>}
                    </button>}
                <table className="tab">
                    <tr>
                        <th>
                            <p className="ptext">Tentatives </p>
                        </th>
                        <th>
                            <p className="ptext score">Score </p>
                        </th>
                    </tr>
                    <tr>
                        <td><p className="ptext score">{this.state.tries}</p></td>
                        <td><p className="ptext score">{this.state.score}</p></td>

                    </tr>
                </table>
            </div>
        )
    }
}