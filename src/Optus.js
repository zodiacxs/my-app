import React, { Component } from 'react';
import './Optus.css';
import Loader from 'react-loader-spinner'
import ProgressBar from './ProgressBar'

const endpoint = 'http://pb-api.herokuapp.com/bars';

class Optus extends Component {

    constructor(props){
        super(props);

        this.state = {
            isloading: false,
            buttons: [],
            bars: [],
            limit: 0,
            active: 0,
        };

        this.UpdateProgress = this.UpdateProgress.bind(this);
        this.handleBarClick = this.handleBarClick.bind(this);
    }

    componentDidMount(){
        this.setState({isloading: true});
        fetch (endpoint)
        .then (response => {
            if (response.ok) {
                return response.json();
            }else{
                throw new Error ("Sorry, we have encoutnered techinical difficulty.")
            }
        })
        .then (data => this.setState({
            isloading: false,
            buttons: data.buttons,
            bars: data.bars,
            limit: data.limit,
        }))
        .catch(error => this.setState({error}));
    }

    handleBarClick(index){
        if (this.state.active !== index){this.setState({active:index})}
    }

    UpdateProgress(button){
        const tempBars = this.state.bars;
        tempBars[this.state.active] += button;
        if (tempBars[this.state.active] < 0 ) {tempBars[this.state.active] = 0}
        this.setState({bars: tempBars})
    }

    render(){
        const {isloading, buttons, bars, limit, active} = this.state;

        if(isloading){
            return (
                <div className="loader">
                    <Loader type="Puff" color="#00BFFF" height="100" width="100"/>
                    <p> LOADING </p>
                </div>
            );
        }

        return(
            <div className="OptusTable">
                <div className="statsTable">    
                    <p>LIMIT: {limit} <br></br> BARS: {bars.toString()}</p>
                    
                </div>
                <div className="barTable">
                    {bars.map ((bar, index) =>
                        <ProgressBar
                            key = {index}
                            isActive = {(active+1)/(index+1)}
                            percentage = {Math.round(bar/limit*100)}
                            onBarClick={this.handleBarClick.bind(null, index)}
                        />
                    )}
                </div>
                <div className="ButtonRow">
                    {buttons.map((button) =>
                        <button key={button*100} onClick={(e) => this.UpdateProgress(button)}>
                            {button}
                        </button>
                        
                    )}
                </div>
            </div>
        )

    }
}

export default Optus;