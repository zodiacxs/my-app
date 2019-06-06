import React, { Component } from 'react';
import Loader from 'react-loader-spinner'
import {
    TheLoader,
    OptusTable,
    StatsSection,
    BarSection,
    Bar,
    CoolFiller,
    Percentage,
    ButtonSection,
    NiceButton,
} from "./StyledComp"

const endpoint = 'http://pb-api.herokuapp.com/bars';

export default class Optus extends Component {

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
                <TheLoader>
                    <Loader type="Puff" color="#00BFFF" height="200" width="200"/>
                    <p> LOADING </p>
                </TheLoader>
            );
        }

        return(
            <OptusTable>
                <StatsSection>
                    <p>LIMIT: {limit} <br></br> BARS: {bars.toString()}</p>
                </StatsSection>
                <BarSection>
                    {bars.map ((bar, index) =>
                        <ProgressBar
                            key = {index}
                            isActive = {(active+1)/(index+1)}
                            percentage = {Math.floor(bar/limit*100)}
                            onBarClick={this.handleBarClick.bind(null, index)}
                        />
                    )}
                </BarSection>
                <ButtonSection>
                    {buttons.map((button) =>
                        <NiceButton key={button*100} onClick={(e) => this.UpdateProgress(button)}>
                            {button}
                        </NiceButton>
                        
                    )}
                </ButtonSection>
            </OptusTable>
        )
    }
}

const ProgressBar = (props) => {
    let percentage = props.percentage;
    if (props.percentage > 100) {percentage = 100;}

    return(
        <Bar className={props.isActive===1 ? "bar active":"bar"} onClick={props.onBarClick}>
            <Percentage>{percentage}% </Percentage>
            <Filler percentage={percentage}/>
        </Bar>
    )
}

const Filler = (props) => {
    return (
        <CoolFiller 
            className={props.percentage===100? "filler full":"filler"} 
            style={{ width: `${props.percentage}%`}}
        />
    )
}