import react from 'react';
import Button from './Button';
import Header from './Header';
import Todoitem from './Todoitem';
import Countercomponent from './countercomponent';





const Todocontainer=()=>{
    return(
        <div className='bg-slate-50 w-56 rounded-3xl p-6'>
            <Header/>
            <Countercomponent/>
            <Todoitem text="eat"/>
            <Todoitem text="code"/>
            <Todoitem text="sleep"/>
            <Button/>
        </div>
    );
};


export default Todocontainer;