import React,{useState} from 'react';



const Countercomponent =()=>{
    const [count,setcount]=useState(1);
    return (
        <div>
            <p>count:{count}</p>
            <button onClick={()=>setcount(count+1)}>Increment</button>
            
            <button onClick={()=>setcount(count-1)}>Deccrement</button>
        </div>

    );
};
export default Countercomponent;