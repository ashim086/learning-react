import { useState } from "react";
import react from 'react';

const Todoitem = (props)=>{
    return(
        <div className='space-x-14 items-center justify-center'>
            <input type='checkbox'></input>
            <span>{props.text}</span>
            <span>...</span>
        </div>
    );
};   


export default Todoitem;