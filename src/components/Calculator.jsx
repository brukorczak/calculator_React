import React, { useState } from 'react'
import './Calculator.css'
import Container from '@mui/material/Container';
import { Box, Hidden } from '@mui/material';

export default function Calculator() {
    const[num, setNum]=useState(0);
    const[oldnum, setOldNum]=useState(0);
    const[operator, setOperator]=useState();

function inpunNum(e){
    var input=e.target.value
    if(num === 0){
        setNum(input);
    }else{
        setNum(num+ input);
    }
    
}

 function clear(e){
    setNum(0);
 }

 function porcentage(){
    setNum(num/100);
 }

 function changeSign(){
    if(num > 0){
        setNum(-num);
    } else{
        setNum(Math.abs(num));
    }
 }

 function operatorHandler(e){
    var operatorInput = e.target.value
    setOperator(operatorInput);
    setOldNum(num);
    setNum(0);
 }

 function calculate(){
    if(operator === "/"){
        setNum(parseFloat(oldnum)/parseFloat(num));
    } else if(operator === "X"){
        setNum(parseFloat(oldnum)*parseFloat(num));
    } else if(operator === "-"){
        setNum(parseFloat(oldnum)-parseFloat(num));
    } else if(operator === "+"){
        setNum(parseFloat(oldnum)+ parseFloat(num));
    }

    console.log("Calculo");
    console.log(oldnum);
    console.log(num);
    console.log(operator);
 }



  return (
    <div>
    <Box m={5}/>
    <Container maxWidth="xs">
    <div className="wrapper">
    <Box m={12}/>
        <h1 className="result">{num}</h1>
        <button onClick={clear}>AC</button>
        <button onClick={changeSign}>+/-</button>
        <button onClick={porcentage}>%</button>
        <button className='orange' onClick={operatorHandler} value="/">/</button>
        <button className='gray' onClick={inpunNum} value={7}>7</button>
        <button className='gray' onClick={inpunNum} value={8}>8</button>
        <button className='gray' onClick={inpunNum} value={9}>9</button>
        <button className='orange' onClick={operatorHandler} value="X">X</button>
        <button className='gray' onClick={inpunNum} value={4}>4</button>
        <button className='gray' onClick={inpunNum} value={5}>5</button>
        <button className='gray' onClick={inpunNum} value={6}>6</button>
        <button className='orange' onClick={operatorHandler} value="-">-</button>
        <button className='gray' onClick={inpunNum} value={1}>1</button>
        <button className='gray' onClick={inpunNum} value={2}>2</button>
        <button className='gray' onClick={inpunNum} value={3}>3</button>
        <button className='orange' onClick={operatorHandler} value="+">+</button>
        <button className='gray' onClick={inpunNum} value={0}>0</button>
        <button className='gray'onClick={inpunNum} value={"."}>,</button>
        <button className='gray' style={{visibility: "Hidden"}}>,</button>
        <button className='orange' onClick={calculate}>=</button>
    </div>
    </Container>
    </div>
  )
}
