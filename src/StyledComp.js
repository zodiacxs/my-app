import styled from "styled-components";

const Loading = styled.div`
    justify-content: center;
    position: relative;
    display: grid;
    margin: 40px;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
`;

const OptusTable = styled.div`
    margin: 5% 5% 8% 5%;
    padding: 50px 0;
    position: relative;
    display: block;
    width: auto;
`;

const StatsSection = styled.div`
    text-align: center;
    margin: 10px 0 10px 0;
    padding: 0;
    font-size: 30px;
`;

const BarSection = styled.div`
    width: auto;
    position: relative;
    margin: 20px;
`;

const Bar = styled.div`
    cursor: pointer;
    padding: 2px;
    margin: 10px 5px 10px 5px;
    border: 1px solid #333;
    border-radius: 10px;
    width: 100%;
    height: 20px;
    text-align: center;
    &:hover{
        box-shadow: 0 12px 12px 0 rgba(0,0,0,0.24), 0 17px 20px 0 rgba(0,0,0,0.19); 
        background-color: rgb(255, 254, 170); 
    }
    &.active{
        border: 2px solid black
        background:rgb(253, 252, 198)
    }
`;

const CoolFiller = styled.div`
    border-radius: inherit;
    background: rgb(26, 189, 230);
    height: 100%;
    -webkit-transition: 0.5s;
    -moz-transition: 0.5s;
    -o-transition: 0.5s;
    transition: 0.5s;
    &.full{
        background: red;
    }
`;

const Percentage = styled.div`
    position: absolute; 
    text-align: center;
    width: 100%;
`;

const ButtonSection = styled.div`
    width: auto;
    margin: 50px 20px 50px 20px;
    text-align: center;
    overflow: auto;
`;

const NiceButton = styled.button`
    background-color:  transparent;
    border: 3px solid #0099CC;
    border-radius: 10px;
    text-align: center;
    font-size: 24px;
    margin-left: 5px;
    margin-right: 5px;
    width: 20%;
    min-width: 40px;
    padding: 10px; 
    display: inline-block；
    &:hover{
        background: rgb(255, 254, 170); 
        box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19); 
    }
`;



export {Loading, OptusTable, StatsSection, BarSection, Bar, CoolFiller,Percentage, ButtonSection, NiceButton};