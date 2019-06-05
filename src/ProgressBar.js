import React, { Component } from 'react';
import './Optus.css';

export default class ProgressBar extends Component{

    constructor(props) { 
        super(props);
        this.calculatePercentageToShow = this.calculatePercentageToShow.bind(this);
    }

    calculatePercentageToShow(){
        const percentage = this.props.percentage
        if (percentage > 100){
            return 100;
        }else{
            return percentage;
        }
    }

    render(){

        const percentage = this.calculatePercentageToShow();
        if (this.props.isActive===1){
            return(
                <div className="bar" onClick={this.props.onBarClick} style={{border: "2px solid black", background: "rgb(253, 252, 198)"}}>
                    <div className="percentage">{percentage}% </div>
                    <Filler percentage={percentage}/>
                </div>
            )
        }else{
            return(
                <div className="bar" onClick={this.props.onBarClick}>
                    <div className="percentage">{percentage}% </div>
                    <Filler percentage={percentage}/>
                </div>
            )
        }
    }
}

const Filler = (props) => {
    if (props.percentage === 100){
        return (
            <div className="filler" style={{ width: `${props.percentage}%`, background: "red"}}></div>
        )
    }else{
        return (
            <div className="filler" style={{ width: `${props.percentage}%`}}></div>
        )
    }
    
}